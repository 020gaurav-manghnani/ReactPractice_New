import React, { useState } from "react";
import UserContext from "./UserContext";

//passing children in the parametere means , you can pass any child component or nested child component in there
// like we created "outlet" in previous project

// using ".provider" provides the access to UserContext to the global values
// and  passing "value" is like a prop inside which we are passing an object of all those values which we need to use further

const UserContextProvider = ({children}) => { 
    const [user, setUser] = useState(null)
    return (

    <UserContext.Provider value={{user , setUser}}>
        {children}
    </UserContext.Provider>

    )
}



export default UserContextProvider