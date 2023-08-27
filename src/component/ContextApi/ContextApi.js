import { createContext, useContext, useReducer } from "react";


export const myContextApi = createContext()


export const CustomProvider =({reducer, initiaState, children}) =>(
    <myContextApi.Provider value={useReducer(reducer, initiaState)} >
        {children}
    </myContextApi.Provider>
)
export const useStateValue = () => useContext(myContextApi);