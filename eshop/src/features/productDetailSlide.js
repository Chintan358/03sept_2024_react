import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const displayproduct = createAsyncThunk("displayproduct", async (rejectWithValue) => {

    const response = await fetch("https://67a57072c0ac39787a1e49fd.mockapi.io/products")
    try {

        const result = await response.json()
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})


export const productDetail = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(displayproduct.pending, (state) => {
                    state.loading = true
                }).addCase(displayproduct.fulfilled, (state, action) => {
                    state.loading = false
                    state.products = action.payload
                }).addCase(displayproduct.rejected, (state, action) => {
                    state.loading = false
                    state.products = action.payload
                })
    }



    
})


export default productDetail.reducer