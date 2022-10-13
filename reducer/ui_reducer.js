const uiReducer = (state, action) => {
    if(action.type === 'SET_SEARCH') {
        return {...state, searchValue: action.payload}
    }
}

export default uiReducer