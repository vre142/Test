import { movie_result, reset_result } from "./types"


// Action Creators



export function setMovieResult(situation) {
  return {
    type: movie_result,
    payload : situation
  }
}

export function resetResult(){
  return {
    type : reset_result
  }
}
// reducer

const initialState = {
  movie_result : {}
}

function notesReducer(state = initialState, action) {
  switch (action.type) {
    case movie_result:
      return {
        ...state,
        movie_result : action.payload
        
      }
    case reset_result : 
      return {
        movie_result : initialState.movie_result
      }
    default:
      return state
  }
}

export default notesReducer