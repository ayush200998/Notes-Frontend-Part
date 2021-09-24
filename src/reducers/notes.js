import { CREATE_POST, DELETE, FETCH_NOTES, UPDATE_NOTE } from '../constants'

const noteReducer = (state = [], action) => {
    switch(action.type){

        case CREATE_POST:
            return [{ title: action.payload.title, body: action.payload.body }, ...state]
            
        case FETCH_NOTES:
            return [ ...action.payload ]

        case UPDATE_NOTE:
            return state.map((note) => note._id === action.payload._id ? action.payload : note)

        case DELETE:
            return state.filter((note) => note._id !== action.payload)

        default:
            return state
    }
}

export default noteReducer