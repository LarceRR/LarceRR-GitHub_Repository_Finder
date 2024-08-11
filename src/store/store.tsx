import { configureStore } from '@reduxjs/toolkit'
import githubReposSlice from '../features/githubRepos/githubReposSlice'

// Инициализация глобального хранилища reduxы
export const store = configureStore({
  reducer: {
    githubRepos: githubReposSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch