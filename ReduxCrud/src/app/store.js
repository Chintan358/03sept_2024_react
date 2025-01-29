import { configureStore } from '@reduxjs/toolkit'
import crudReducer from '../features/crud/crudSlice'

export const store = configureStore({
    reducer: {
        crud:crudReducer
    },
})