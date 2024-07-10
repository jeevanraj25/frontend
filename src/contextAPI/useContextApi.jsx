import React, { useContext } from 'react'
import { ContextApi } from './contextAPI'

const useContextApi = () => {

    const context = useContext(ContextApi)
    if(!context){
        throw new Error("Invalid usage of contextApi")
    }
    return context

}

export default useContextApi