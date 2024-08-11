import { useDispatch, useSelector } from 'react-redux';
import './AppBody.scss';
import { RootState } from '../../store/store';
import { useRepository } from '../../hooks/useRepositories';
import { setGithubReposData } from '../../features/githubRepos/githubReposSlice';
import AppBodyMessage from './greetings/AppBodyMessage';
import Repositories from './repositories/Repositories';
import { useEffect } from 'react';

const AppBody = () => {

    // Redux переменные.
    const currentSearchRequest = useSelector((state: RootState) => state.githubRepos.searchInput);
    const githubResponse = useSelector((state: RootState) => state.githubRepos.githubReposData);
    const isSearchButtonAlreadyClicked = useSelector((state: RootState) => state.githubRepos.searchButtonAlreadyClicked);

    const dispatch = useDispatch()

    // Вызов хука для получения даннных с GraphQL.
    const { loading, error, repositories } = useRepository(currentSearchRequest, "", "");

    // Загрузка данных из GraphQL в Redux.
    useEffect(() => {
        if (repositories) {
            dispatch(setGithubReposData(repositories));
        }
    },[repositories])

    if (error) {
        console.log(error);
    }

    return (
        <div className="app-wrapper__body">
            {
                loading
                ? <AppBodyMessage text='Загрузка...' />
                    : !isSearchButtonAlreadyClicked
                    ? <AppBodyMessage text='Добро пожаловать'/> 
                        : githubResponse?.search.repositoryCount == 0
                        ? <AppBodyMessage text='Неверный или пустой запрос'/>
                        : <Repositories />
            }
        </div>
    );
};

export default AppBody;