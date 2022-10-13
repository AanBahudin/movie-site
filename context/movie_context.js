import React, {useContext, useReducer} from 'react'
import movieReducer from '../reducer/movie_reducer'

const initalState = {
    search: '',
    openSidebar: false
}

const MovieContext = React.createContext()

export const MovieProvider = ({children}) => {
    const [state, dispatch] = useReducer(movieReducer, initalState)

    return (
        <MovieContext.Provider value={{
            ...state
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    return useContext(MovieContext)
}