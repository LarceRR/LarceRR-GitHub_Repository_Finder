// Интерфейс, описывающий язык программирования, который(е) был(и) использован(ы) для репозитория
export interface IGithubReposDataItemLanguage {
    node: {
        name: string | null
    }
}

// Интерфейс, описывающий тело единицы ответа, изъятого из search.edges.node
export interface IGithubReposDataItemWithNoNode {
    forkCount: number | null,
    id: string,
    languages: {
        edges: IGithubReposDataItemLanguage[]
    },
    licenseInfo: {
        name: string | null,
        __typename: string
    },
    name: string | null,
    primaryLanguage: {
        name: string | null,
        __typename: string
    },
    stargazerCount: number | null,
    updatedAt: Date | null,
    __typename: string
}

// Интерфейс, описывающий тело единицы ответа, обернутый в node
export interface IGithubReposDataItem {
    node: IGithubReposDataItemWithNoNode
}

// Интерфейс, описывающий ответ с сервера GraphQL
export interface IGithubReposData {
    search: {
        edges: IGithubReposDataItem[],
        repositoryCount: number,
        __typename: string,
    }
}

// Интерфейс, описывающий доступные настройки для SVG иконок
export interface ISVGIcon {
    fillColor?: string,
    height?: number,
    width?: number,
}

// Интерфейс, описывающий типы для redux-состояния
export interface IGithubState {
    searchInput: string,
    searchButtonAlreadyClicked: boolean,
    githubReposData: IGithubReposData | null,
    currentPickedRepository: IGithubReposDataItemWithNoNode | null
}