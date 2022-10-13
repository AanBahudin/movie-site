import React, { useContext, useReducer } from "react";
import uiReducer from "../reducer/ui_reducer";

const initialState = {
    searchValue: ''
}

const UiContext = React.createContext()

export const UiProvider = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)

    const handleSearchValue = (value) => {
        dispatch({type: 'SET_SEARCH', payload: value})
    }

    return (
        <UiContext.Provider value={{
            ...state,
            handleSearchValue
        }}>
            {children}
        </UiContext.Provider>
    )
}

export const useUiContext = () => {
    return useContext(UiContext)
}