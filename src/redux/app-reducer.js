import { auth } from "./auth-reducer.js";

let initialState = {
  initialized: false,
}

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case INITIALIZED_SUCCESS:{
        return {
          ...state, 
          initialized: true,
        }
      }
      default:
        return state;
  }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export let initializeApp = () => (dispatch) => {
  dispatch(auth())
    .then(() =>  {
      dispatch(initializedSuccess())
    })
}


export default appReducer;