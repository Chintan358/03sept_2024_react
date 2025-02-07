import { configureStore } from '@reduxjs/toolkit'
import userDetail from '../features/userDetailSlide'

export const store = configureStore({
    reducer: {
        app:userDetail
    },
})