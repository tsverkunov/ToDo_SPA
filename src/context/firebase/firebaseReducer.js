export const SHOW_LOADER = 'SHOW_LOADER'
export const ADD_NOTE = 'ADD_NOTE'
export const FETCH_NOTES = 'FETCH_NOTES'
export const REMOVE_NOTE = 'REMOVE_NOTE'


export const firebaseReducer = (state, action) => {
switch (action.type) {
  case SHOW_LOADER:
    return {
      ...state, loading: true
    }
  case ADD_NOTE:
    return {
      ...state,
      notes: [...state.notes, action.payload]
    }
  case FETCH_NOTES:
    return {
      ...state,
      notes: action.payload, loading: false
    }
  case REMOVE_NOTE:
    return {
      ...state,
      notes: state.notes.filter(note => note.id !== action.payload )
    }

  default:
    return state
}
}