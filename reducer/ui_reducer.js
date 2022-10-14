const uiReducer = (state, action) => {
    if(action.type === 'SET_SEARCH') {
        return {...state, searchValue: action.payload}
    } if(action.type === 'SET_SIDEBAR') {
        return {...state, openSidebar: action.payload}
    }
}

export default uiReducer