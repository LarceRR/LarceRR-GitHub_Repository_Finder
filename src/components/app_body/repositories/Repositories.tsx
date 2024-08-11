import { useDispatch, useSelector } from 'react-redux';
import './Repositories.scss'
import { RootState } from '../../../store/store';
import { DataGrid, GridColDef, GridEventListener, GridValueGetter } from '@mui/x-data-grid';
import RepositoryDescription from './RepositoryDescription';
import { setCurrentPickedRepository } from '../../../features/githubRepos/githubReposSlice';

const Repositories = () => {

    const githubResponse = useSelector((state: RootState) => state.githubRepos.githubReposData);
    const dispatch = useDispatch()

    // функция, обрабатывающая события нажатия на строку в таблице. Загружает данные в Redux.
    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        dispatch(setCurrentPickedRepository(params.row))
    }

    //Константа, определяющая колонки для таблицы.
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Название', width: 182 },
        { field: 'primaryLanguage', headerName: 'Язык', width: 182, 
            valueGetter: (value: GridValueGetter) => {
                if (!value) {
                    return 'Нет данных';
                } else {
                    return value.name;
                }
            }
        },
        { field: 'forkCount', headerName: 'Число форков', width: 182 },
        { field: 'stargazerCount', headerName: 'Число звезд', width: 182 },
        { field: 'updatedAt', headerName: 'Дата обновления', width: 182,
            valueGetter: (value: Date) => {
                if (!value) {
                    return 'Нет данных'
                } else {
                    return new Date(value).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }).split('/').join('.');
                }
            }
        },
    ];

    return (
        <div className='app-wrapper__body__repositories'>
            <div className="app-wrapper__body__repositories__datagrid">
                <span>Результаты поиска</span>
                <DataGrid
                    rows={githubResponse?.search.edges.map((node) => node.node)}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 4}
                    },
                    }}
                    pageSizeOptions={[4, 5, 6, 7, 8, 9, 10]}
                    getRowId={(row: any) => row.id}
                    onRowClick={handleRowClick}
                    sx={{
                        border: 'unset'
                    }}
                />
            </div>
            <RepositoryDescription />
        </div>
    );
};

export default Repositories;