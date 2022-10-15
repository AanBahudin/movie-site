import React, { useContext, useReducer } from "react";
import uiReducer from "../reducer/ui_reducer";

const initialState = {
    searchValue: '',
    openSidebar: false,
    sidebarMenuStatus: {
        id: 0,
        isCollapse: false
    }
}

const UiContext = React.createContext()

export const UiProvider = ({children}) => {
    const [state, dispatch] = useReducer(uiReducer, initialState)

    const handleSearchValue = (value) => {
        dispatch({type: 'SET_SEARCH', payload: value})
    }

    const handleSidebarMenuStatus = (id, status) => {
        dispatch({type: 'SIDEBAR_COLLAPSE', payload: {id, status}})
    }

    const handleSidebar = (status) => {
        dispatch({type: 'SET_SIDEBAR', payload: status})
    }

    return (
        <UiContext.Provider value={{
            ...state,
            handleSearchValue,
            handleSidebar,
            handleSidebarMenuStatus
        }}>
            {children}
        </UiContext.Provider>
    )
}

export const useUiContext = () => {
    return useContext(UiContext)
}