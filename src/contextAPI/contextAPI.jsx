import React, { createContext, useState } from "react";

const ContextApi = createContext()

const ContextProvider = ({children}) => {
    const [assignments, setAssignments] = useState([])
    const [isAssignment, setIsAssignment] = useState(false)
    const [loadAssignment, setLoadAssignment] = useState(false)
    const [university,setUniversity] = useState([
        {
            name:"Amruta Institute of Engineering & Management Sciences",
            id:"65ec9236c0fc00985490476d"
        },
    ]);
    const [isLogOut ,setIsLogOut] = useState(false);
    const [userName, setUserName] = useState("")
    const contextApiValues = {
        assignments,
        setAssignments,
        isAssignment,
        setIsAssignment,
        loadAssignment,
        setLoadAssignment,
        university,
        setUniversity,
        isLogOut ,
        setIsLogOut,
        userName, 
        setUserName,
    }

    return (
        <ContextApi.Provider value={contextApiValues}>
            {children}
        </ContextApi.Provider>
    )
}

export {ContextApi,ContextProvider}