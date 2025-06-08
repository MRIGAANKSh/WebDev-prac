import React from "react"
import { createContext,useContext } from "react";



const themecontext=createContext({
    thememode:"light",
    darktheme:()=>{},
    lighttheme:()=>{}
});

export const themerpovider=themecontext.Provider


export default function useTheme(){
    return useContext(themecontext)
}