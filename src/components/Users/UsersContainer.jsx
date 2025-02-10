import React from "react";
import { connect } from "react-redux";
import { setUsersActionCreator, toggleFriendActionCreator, updateSearchActionCreator } from "../../redux/users-reducer";
import Users from "./Users";


let userElements;
const mapStateToProps = (state) => {
  return {
    state: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFriend: (user_id) => {
      dispatch(toggleFriendActionCreator(user_id))
    },
    updateSearch: (text) => {
      dispatch(updateSearchActionCreator(text))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;