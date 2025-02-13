import React from "react";
import { connect } from "react-redux";
import { setPage, toggleIsFetching, setUsers, toggleFriend, updateSearch } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios';


class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  onUpdateSearch = (value) => {
    this.props.updateSearch(value);
  }

  onSetPage = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  showMore = (pageNumber) => {
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
      .then(response => {
        this.props.setUsers([...this.props.state.users, ...response.data.items], response.data.totalCount);
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