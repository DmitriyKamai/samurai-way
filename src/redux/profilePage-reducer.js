import { profileAPI } from "../API/api";
import { toggleIsFetching } from "./users-reducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

let initialState = {
  id: 0,
  name: "Валерий Лохматый",
  wallpaperImgSrc: 'https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg',
  avatarImgSrc: 'https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png',
  posts: [
    {
      post_id: 1, likesCount: 23, message: 'Сегодня ел влажные корма.'
    },
    {
      post_id: 2, likesCount: 3213, message: 'Вчера ел сгущёнку с Богданчоусом'
    },
    {
      post_id: 3, likesCount: 223, message: 'Сегодня встречался с Дашей за гаражами'
    }
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        post_id: 5,
        likesCount: 0,
        message: action.newPost
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })


export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const updateStatusAC = (status) => ({
  type: UPDATE_STATUS,
  status
})

export const getProfile = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    profileAPI.getProfileInfo(userId)
      .then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(data));
      });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(data => {
        dispatch(setStatus(data))
      })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(updateStatusAC(status))
        }
      })
  }
}

export default profileReducer