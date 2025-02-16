import React from "react";
import { connect } from "react-redux";
import { setPage, toggleIsFetching, setUsers, toggleFriend, updateSearch } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios';
import { usersAPI } from "../../API/api";


class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(this.props.state.currentPage, this.props.state.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items, data.totalCount);
      });
  }

  onUpdateSearch = (value) => {
    this.props.updateSearch(value);
  }

  onSetPage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setPage(pageNumber)
    usersAPI.getUsers(pageNumber, this.props.state.pageSize)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items, data.totalCount);
      });
  }

  showMore = (pageNumber) => {
    this.props.setPage(pageNumber)
    usersAPI.getUsers(pageNumber, this.props.state.pageSize)
      .then(data => {
        this.props.setUsers([...this.props.state.users, ...data.items], data.totalCount);
      });
  }
  render() {
    return <Users
      state={this.props.state}
      onUpdateSearch={this.onUpdateSearch}
      onSetPage={this.onSetPage}
      showMore={this.showMore}
      toggleFriend={this.props.toggleFriend}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
}

const UsersContainer = connect(mapStateToProps,
  { toggleFriend, updateSearch, setUsers, setPage, toggleIsFetching }
)(UsersComponent)


export default UsersContainer;