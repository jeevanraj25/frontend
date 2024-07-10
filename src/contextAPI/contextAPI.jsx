import React, { createContext, useState } from "react";

const ContextApi = createContext()

const ContextProvider = ({children}) => {
    const [assignments, setAssignments] = useState([])
    const [isAssignment, setIsAssignment] = useState(false)
    const [loadAssignment, setLoadAssignment] = useState(false)

    return (
        <ContextApi.Provider value={{assignments,setAssignments,isAssignment,setIsAssignment,loadAssignment,setLoadAssignment}}>
            {children}
        </ContextApi.Provider>
    )
}

export {ContextApi,ContextProvider}