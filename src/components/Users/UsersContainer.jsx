import React from "react";
import { connect } from "react-redux";
import { setPage, updateSearch, getUsers, showMore, addFriend, deleteFriend } from "../../redux/users-reducer";
import Users from "./Users";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.state.currentPage, this.props.state.pageSize);
  }

  onUpdateSearch = (value) => {
    this.props.updateSearch(value);
  }

  onSetPage = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.state.pageSize);
    this.props.setPage(pageNumber)
  }

  render() {
    return <Users
      onSetPage={this.onSetPage}
      onUpdateSearch={this.onUpdateSearch}
      {...this.props}
    />
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.users
  }
}

const UsersContainer = connect(mapStateToProps,
  {
    updateSearch, addFriend, deleteFriend,
    getUsers, showMore, setPage
  }
)(UsersComponent)


export default UsersContainer;