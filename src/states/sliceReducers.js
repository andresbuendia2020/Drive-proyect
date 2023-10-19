import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: true,
  conexion: false,
  usuario: {},
}



const sliceReducers = createSlice({
    name: 'sidebar',
    initialState,
    reducers:{
        sidebarShowReducer: (state, action)=>{
            state.sidebarShow= action.payload.sidebarShow
        },
        usuario: (state, action)=>{
            state.conexion= action.payload.conexion
            state.usuario= action.payload.usuario
        }
    }
   
})

export const {sidebarShowReducer, usuario} = sliceReducers.actions
export default sliceReducers.reducer