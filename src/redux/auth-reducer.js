import { authAPI, profileAPI } from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_USER_PHOTO = 'SET-USER-PHOTO';

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

export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, login, email, isAuth }
})

export const setAuthUserPhoto = (link) => ({
  type: SET_USER_DATA,
  link
})

export const getAuthData = () => {
  return (dispatch) => {
    authAPI.getAuthUserData()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data;
          dispatch(setAuthUserData(id, login, email, true));
          profileAPI.getProfileInfo(id)
            .then(data => {
              dispatch(setAuthUserPhoto(data.photos.small));
            });
        }
      });
  }
}

export const login = ({email, password, rememberMe = false}) => {
  return (dispatch) => {
    authAPI.login({email, password, rememberMe})
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(getAuthData())
      }
    })
  }
}

export const logout= () => {
  return (dispatch) => {
    authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
  }
}

export default authReducer