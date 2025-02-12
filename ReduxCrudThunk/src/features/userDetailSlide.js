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

export const displayuser = createAsyncThunk("displayuser", async (rejectWithValue) => {

    const response = await fetch("https://67a57072c0ac39787a1e49fd.mockapi.io/users")
    try {

        const result = await response.json()
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteuser = createAsyncThunk("deleteuser", async (id, { rejectWithValue }) => {

    const response = await fetch(`https://67a57072c0ac39787a1e49fd.mockapi.io/users/${id}`, {
        method: "delete"
    })
    try {

        const result = await response.json()
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})

export const userById = createAsyncThunk("userById", async (id, { rejectWithValue }) => {

    const response = await fetch(`https://67a57072c0ac39787a1e49fd.mockapi.io/users/${id}`)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }

})

export const updateuser = createAsyncThunk("updateuser", async (data, { rejectWithValue }) => {

    const response = await fetch(`https://67a57072c0ac39787a1e49fd.mockapi.io/users/${data.id}`, {
        method: "put",
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createuser.pending, (state) => {
            state.loading = true
        }).addCase(createuser.fulfilled, (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        }).addCase(createuser.rejected, (state, action) => {

            state.loading = false
            state.users = action.payload
        }).addCase(displayuser.pending, (state) => {
            state.loading = true
        }).addCase(displayuser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        }).addCase(displayuser.rejected, (state, action) => {

            console.log(action.payload);
            state.loading = false
            state.users = action.payload
        }).addCase(deleteuser.pending, (state) => {
            state.loading = true
        }).addCase(deleteuser.fulfilled, (state, action) => {
            state.loading = false
            state.users = state.users.filter(ele => ele.id != action.payload.id)
        }).addCase(deleteuser.rejected, (state, action) => {

            state.loading = false
            state.users = action.payload
        }).addCase(userById.pending, (state) => {
            state.loading = true
        }).addCase(userById.fulfilled, (state, action) => {
            state.loading = false
            state.users.push(action.payload)
        }).addCase(userById.rejected, (state, action) => {

            state.loading = false
            state.users = action.payload
        }).addCase(updateuser.pending, (state) => {
            state.loading = true
        }).addCase(updateuser.fulfilled, (state, action) => {
            state.loading = false
            //state.users.push(action.payload)
        }).addCase(updateuser.rejected, (state, action) => {

            state.loading = false
            state.users = action.payload
        })





        // [createuser.pending]: (state) => {
        //     state.loading = true
        // },
        // [createuser.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.users.push(action.payload)

        // },
        // [createuser.rejected]: (state, action) => {
        //     state.loading = false
        //     state.users = action.payload
        // }, [displayuser.pending]: (state) => {
        //     state.loading = true
        // },
        // [displayuser.fulfilled]: (state, action) => {
        //     state.loading = false
        //     state.users = action.payload

        // },
        // [displayuser.rejected]: (state, action) => {
        //     state.loading = false
        //     state.users = action.payload
        // }
    }
})


export default userDetail.reducer