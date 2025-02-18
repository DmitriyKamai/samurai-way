import { usersAPI, followAPI } from "../API/api";

const TOGGLE_FRIEND = 'TOGGLE-FRIEND';
const UPDATE_SEARCH = 'UPDATE-SEARCH';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING-IN-PROGRESS';

let initialState = {
  searchUserInfo: "",
  findedUsers: [],
  users: [],
  friends: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  let stateCopy = {
    ...state
  };
  switch (action.type) {
    case TOGGLE_FRIEND:
      stateCopy = {
        ...state,
        users: state.users.map(user => {
          if (action.user_id === user.id) {
            return { ...user, followed: !user.followed }
          }
          return user;
        })
      };
      stateCopy.friends = stateCopy.users.filter(user => user.followed);
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
    case UPDATE_SEARCH:
      stateCopy.searchUserInfo = action.text;
      stateCopy.users = [...state.users];
      stateCopy.friends = [...state.friends];
      stateCopy.findedUsers = stateCopy.users.filter(user => action.text ? user.name.toLowerCase().includes(action.text.toLowerCase()) : true);
      return stateCopy;
    case SET_USERS:
      stateCopy.users = [...action.users];
      stateCopy.totalUsersCount = action.totalCount;
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
    case TOGGLE_IS_FETCHING:
      stateCopy.isFetching = action.status;
      return stateCopy;
    case SET_CURRENT_PAGE:
      stateCopy.currentPage = action.pageNumber;
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
    case FOLLOWING_IN_PROGRESS:
      if (action.status) {
        stateCopy.followingInProgress = [...state.followingInProgress, action.id];
      } else {
        stateCopy.followingInProgress = state.followingInProgress.filter(id => id !== action.id)
      }
      return stateCopy;
    default:
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
  }
}

// Action creators

export const toggleFriend = (user_id) => ({
  type: TOGGLE_FRIEND,
  user_id
});

export const updateSearch = (text) => ({
  type: UPDATE_SEARCH,
  text
});

export const setUsers = (users, totalCount) => ({
  type: SET_USERS,
  users,
  totalCount
})

export const setPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  pageNumber
})

export const toggleIsFetching = (status) => ({
  type: TOGGLE_IS_FETCHING,
  status
})

export const toggleFollowingInProgress = (id, status) => ({
  type: FOLLOWING_IN_PROGRESS,
  id,
  status
})

// Thunk creators

export const getUsers = (currentPage, pageSize = initialState.pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        console.log(data)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items, data.totalCount));
      });
  }
}

export const showMore = (pageNumber, pageSize = initialState.pageSize, users) => {
  return (dispatch) => {
    dispatch(setPage(pageNumber))
    usersAPI.getUsers(pageNumber, pageSize)
      .then(data => {
        dispatch(setUsers([...users, ...data.items], data.totalCount));
      });
  }
}

export const addFriend = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(id, true));
    followAPI.follow(id)
      .then(data => {
        dispatch(toggleFollowingInProgress(id, false));
        if (data.resultCode === 0) {
          dispatch(toggleFriend(id));
        }
      });
  }
}

export const deleteFriend = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(id, true));
    followAPI.unFollow(id)
      .then(data => {
        dispatch(toggleFollowingInProgress(id, false));
        if (data.resultCode === 0) {
          dispatch(toggleFriend(id));
        }
      });
  }
}

export default usersReducer