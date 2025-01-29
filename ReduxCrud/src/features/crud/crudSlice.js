import { createSlice } from '@reduxjs/toolkit'


const initialState = {}



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

        userbyid: (state, action) => {

            console.log(action);

            // fetch(`http://localhost:3000/users/${action.payload}`).then(resp => {
            //     return resp.json()
            // }).then(result => {
            //     state = result

            // })
        }


    },
})

// Action creators are generated for each case reducer function
export const { adduser, deleteuser, userbyid } = crudSlice.actions

export default crudSlice.reducer