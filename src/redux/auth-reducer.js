const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PHOTO = 'SET-USER-PHOTO';

export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: { userId, login, email }
})

export const setAuthUserPhoto = (link) => ({
  type: SET_USER_DATA,
  link
})


let initialState = {
  userId: null,
  email: null,
  login: null,
  photo: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      state = {
        ...state,
        ...action.data,
        isAuth: true
      }
      return state;
    case SET_USER_PHOTO:
        state = {
        ...state,
        photo: action.link
      }
      return state;
    default:
      return state;
  }

}

export default authReducer