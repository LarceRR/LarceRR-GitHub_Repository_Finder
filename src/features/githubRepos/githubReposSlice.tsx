import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IGithubReposData, IGithubReposDataItemWithNoNode, IGithubState } from '../../store/interfaces'

// Инициализация состояний Redux
const initialState: IGithubState = {
    searchInput: '',
    searchButtonAlreadyClicked: false,
    githubReposData: null,
    currentPickedRepository: null
}

// Создание слайса в Redux, определенние методов для взаимодействия с состояниями.
export const gitHubReposSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchInput: (state, action: PayloadAction<string>) => {
        state.searchInput = action.payload;
        state.searchButtonAlreadyClicked = true;
        state.currentPickedRepository = null;
    },
    setGithubReposData: (state, action: PayloadAction<IGithubReposData>) => {
      state.githubReposData = action.payload
    },
    setCurrentPickedRepository: (state, action: PayloadAction<IGithubReposDataItemWithNoNode>) => {
      state.currentPickedRepository = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSearchInput, setGithubReposData, setCurrentPickedRepository } = gitHubReposSlice.actions

export default gitHubReposSlice.reducer