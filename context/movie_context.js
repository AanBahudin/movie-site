import React, {useContext, useReducer} from 'react'
import { useUiContext } from './ui_context'
import movieReducer from '../reducer/movie_reducer'
import {useRouter} from 'next/router'

const initalState = {
    search: '',
    openSidebar: false
}

const MovieContext = React.createContext()

export const MovieProvider = ({children}) => {
    const [state, dispatch] = useReducer(movieReducer, initalState)
    const router = useRouter()
    const {searchValue, handleSearchValue} = useUiContext()

    const findData = () => {
        router.push(`/search/query?title=${searchValue}&page=${1}`)
        handleSearchValue('')
    }


    return (
        <MovieContext.Provider value={{
            ...state,
            findData
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext)
}