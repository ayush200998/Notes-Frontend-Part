import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const createPost = (formData) => API.post('/notes/create', formData)
export const fetchNotes = () => API.get('/notes')
export const updateNote = (id, note) => API.patch(`/notes/update/${id}`, note)
export const remove = (id) => API.delete(`/notes/${id}`)