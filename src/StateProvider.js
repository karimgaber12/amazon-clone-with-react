/* eslint-disable no-unused-vars */
import React,{createContext,useContext,useReducer} from "react";

// prepares the dataLayer
export const StateContext = createContext();

// wrap our app and provide the dataLayer
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}> {/*reducer => what make in data// initialState=> data before change or edit*/}
        {children}
    </StateContext.Provider>
)

// pull information from dataLayer
export const useStateValue = ()=> useContext(StateContext)