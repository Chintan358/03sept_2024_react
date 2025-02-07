import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'


export const createuser = createAsyncThunk("createuser", async (data, { rejectWithValue }) => {
    const response = await fetch("https://67a57072c0ac39787a1e49fd.mockapi.io/users", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    try {

        const result = await response.json()
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})





export const userDetail = createSlice({
    name: "app",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    reducers: {
        [createuser.pending]: (state) => {
            state.loading = true
        },
        [createuser.fulfilled]: (state, action) => {
            state.loading = false
            state.users.push(action.payload)

        },
        [createuser.rejected]: (state, action) => {
            state.loading = false
            state.users = action.payload
        }
    }
})


export default userDetail.reducer