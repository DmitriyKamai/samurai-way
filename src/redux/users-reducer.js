const TOGGLE_FRIEND = 'TOGGLE-FRIEND';
const UPDATE_SEARCH = 'UPDATE-SEARCH';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

export const toggleFriend = (user_id) => ({
  type: TOGGLE_FRIEND,
  user_id
});

export const updateSearch = (text) => ({
  type: UPDATE_SEARCH,
  text
});

export const setUsers = (users, totalCount) => (  console.log(users), {
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

let initialState = {
  searchUserInfo: "",
  findedUsers: [],
  users: [],
  friends: [],
  pageSize: 8,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
    default:
      stateCopy.findedUsers = stateCopy.users.filter(user => stateCopy.searchUserInfo ? user.name.toLowerCase().includes(stateCopy.searchUserInfo.toLowerCase()) : true);
      return stateCopy;
  }
}

export default usersReducer