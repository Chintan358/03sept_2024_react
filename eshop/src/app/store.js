import { configureStore } from '@reduxjs/toolkit'
import userDetail from '../features/userDetailSlide'
import productDetail  from '../features/productDetailSlide'

export const store = configureStore({
    reducer: {
        app:userDetail,
        product:productDetail
    },
})