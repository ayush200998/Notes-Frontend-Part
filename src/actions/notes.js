import * as api from '../api'
import { CREATE_POST, DELETE, FETCH_NOTES, UPDATE_NOTE } from '../constants'

export const create = (formData) => async(dispatch) => {
    try{
        const { data } = await api.createPost(formData)

        dispatch({type: CREATE_POST , payload: data})

    }catch(error){
        console.log(error.message)
    }
}

export const getNotes = () => async(dispatch) => {
    try{
        // Fetch all the notes from the server
        const { data } = await api.fetchNotes()
        
        dispatch({type: FETCH_NOTES, payload: data})
    }catch(error){
        console.log(error.message)
    }
}

export const update = (id, note) => async(dispatch) => {
    try{
        const { data } = await api.updateNote(id, note)
        dispatch({type: UPDATE_NOTE, payload: data})
    
    }catch(error){
        console.log(error)
    }
}

export const removeNote = (id) => async(dispatch) => {
    try {
        await api.remove(id)

        dispatch({type: DELETE, payload: id})

    } catch (error) {
        console.log(error)
    }
}