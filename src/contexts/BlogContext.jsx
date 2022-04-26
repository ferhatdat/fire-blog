import { createContext, useState } from "react";


export const BlogContext = createContext()

const initialInfo = {
    title: '',
    imageURL: '',
    content: '',
    date: new Date().toDateString(),
    user: ''
}

const BlogContextProvider = (props) => {
    const [info, setInfo] = useState(initialInfo)
    
    return (
        <BlogContext.Provider value={{info, setInfo}}>
            {props.children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider; 