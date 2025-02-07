import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

var initialState = {}



export const crudSlice = createSlice({


    name: 'crud',
    initialState,
    reducers: {

        adduser: (state, action) => {

            fetch("http://localhost:3000/users", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(action.payload)
            })
        },

        deleteuser: (state, action) => {

            fetch(`http://localhost:3000/users/${action.payload}`, {
                method: "delete",
            })


        },

        userbyid: async (state, action) => {


            const result = await axios.get(`http://localhost:3000/users/${action.payload.uid}`)
            state = result.data
            console.log(state);

            // window.location.href = "/"

        }


    },
})

// Action creators are generated for each case reducer function
export const { adduser, deleteuser, userbyid } = crudSlice.actions

export default crudSlice.reducer