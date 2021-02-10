export function fn(state, action){
    return {
        GET_ITEMS: {...state, items: action.payload, loading: false},
        // DELETE_ITEMS: {...state, searsh: []},
        RENDER_DETAILS: {...state, details: action.payload, searchList: ''},
        RENDER_SEARCH_LIST: {...state, searchList: action.payload},
        LOADING: {...state, loading: true},
        ERROR: {...state, loading: false, error: true},
    }
}