import { createSlice } from "@reduxjs/toolkit";

const HamburgerSlice= createSlice({
    name: "menubar",
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleState:(state)=>{
            state.isMenuOpen= !state.isMenuOpen
        },
        closeMenu:(state)=>{
            state.isMenuOpen= false
        },
        openMenu:(state)=>{
            state.isMenuOpen= true
        }
    }
})


export const {toggleState, closeMenu, openMenu}= HamburgerSlice.actions; 
export default HamburgerSlice.reducer; 