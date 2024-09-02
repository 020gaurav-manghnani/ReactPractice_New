import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : () => {},
    lightTheme :() => {} 
})

 // in 09 we created UserContext here we have ThemeContext
 // in 09 we created a seprate file for provider thing, here we are accessing it in a variable called "ThemeProvider"

export const ThemeProvider = ThemeContext.Provider

// creating a user defined hook "useTheme" which will hold the bydefault propertied of hook called "useContext"
// and inside useContext we are passing out "themeContext" so that "usetheme" has access to Themecontext's prop as well.

export default function useTheme(){
    return useContext(ThemeContext)
}