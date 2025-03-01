import { getAuthData } from "./auth-reducer";

const SET_INITIALIZED = 'SET-INITIALIZED';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      state = {
        ...state,
        initialized: true
      }
      return state;
    default:
      return state;
  }
}

export const initializedSuccess = () => ({
  type: SET_INITIALIZED,
})


export const initializeApp = () => {
  return (dispatch) => {
    let getAuthDataResult = dispatch(getAuthData());
    getAuthDataResult.then(() => {
        dispatch(initializedSuccess())
    })
  }
}

export default appReducer