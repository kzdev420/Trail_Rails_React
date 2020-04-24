const initialState = {
    users: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "ALL_USERS":
            return {...state, users: action.users}
        
        default:
            return state;
    }
}