import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import Star from "../../../assets/icons/star";

const RepositoryDescription = () => {

    // Переменная, хранящая в себе данные о выбранном в таблице репозитории.
    const currentPickedRepository = useSelector((state: RootState) => state.githubRepos.currentPickedRepository);

    return (
        <div className="repository-description-wrapper">
            {
                currentPickedRepository
                ? 
                <>
                    <h3 className="repository-description-wrapper__repositoru-name">{currentPickedRepository?.name}</h3>
                    <div className="repository-description-wrapper__repositoru-body">
                        <div className="repository-description-wrapper__repositoru-body__languages">
                            <span className="repository-description-wrapper__repositoru-body__languages__language language-primary">
                                {
                                    currentPickedRepository?.primaryLanguage == null 
                                    ? 'Нет данных о языке' 
                                    : currentPickedRepository?.primaryLanguage.name
                                }
                            </span>
                            <div className="repository-description-wrapper__repositoru-body__languages__language">
                                {
                                    currentPickedRepository?.languages == null
                                    ? 'Нет данных о языках'
                                    : currentPickedRepository?.languages.edges.map((edge) => {
                                        return <span id="">{edge.node.name}</span>
                                    })
                                }
                            </div>
                        </div>
                        <div className="repository-description-wrapper__repositoru-body__stars">
                            <Star fillColor="#FFB400" height={24} width={24} />
                            {
                                currentPickedRepository?.stargazerCount == null
                                ? 'Нет данных о звездах'
                                : currentPickedRepository?.stargazerCount
                            }
                        </div>
                    </div>
                    <span className="repository-description-wrapper__repositoru-licence">
                        {
                            currentPickedRepository?.licenseInfo == null 
                            ? 'Нет данных о лицензии' 
                            : currentPickedRepository?.licenseInfo.name
                        }
                    </span>
                </>
                : <span className="repository-description-wrapper__unpicked">Выберите репозитарий</span>
            }
        </div>
    );
};

export default RepositoryDescription;