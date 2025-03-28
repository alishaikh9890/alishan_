import { createContext, useContext } from "react";


export const ThemeContext = createContext()    


export const ThemeProvider = ThemeContext.Provider


export const ThemeMode = () =>{
    return useContext(ThemeContext)
} 









