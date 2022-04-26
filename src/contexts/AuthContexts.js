import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext()
const initialInfo = {
    title: '',
    imageURL: '',
    content: '' ,
    date: new Date().toDateString(),
    user: ''
}

const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState()
    const [email, setEmail] = useState(" ");
   

    useEffect(() => {
      userObserver(setCurrentUser)
    }, [])
    
    return (
        <AuthContext.Provider value={{currentUser, setCurrentUser, email, setEmail}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider; 