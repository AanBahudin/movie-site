const uiReducer = (state, action) => {
    if(action.type === 'SET_SEARCH') {
        return {...state, searchValue: action.payload}
    } if(action.type === 'SET_SIDEBAR') {
        return {...state, openSidebar: action.payload}
    } if(action.type === 'SIDEBAR_COLLAPSE') {
        const {id, status} = action.payload
        return {...state, sidebarMenuStatus: {id, isCollapse: status}}
    }
}

export default uiReducer