import React from "react";
import { connect } from "react-redux";
import { setPageActionCreator, setUsersActionCreator, toggleFriendActionCreator, updateSearchActionCreator } from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from 'axios';

class UsersComponent extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  onUpdateSearch = (value) => {
    this.props.updateSearch(value);
  }

  onSetPage = (pageNumber) => {
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.state.pageSize}`)
      .then(response => {
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFriend: (user_id) => {
      dispatch(toggleFriendActionCreator(user_id))
    },
    updateSearch: (text) => {
      dispatch(updateSearchActionCreator(text))
    },
    setUsers: (users, totalCount) => {
      dispatch(setUsersActionCreator(users, totalCount))
    },
    setPage: (pageNumber) => {
      dispatch(setPageActionCreator(pageNumber))
    }
  }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)


export default UsersContainer;