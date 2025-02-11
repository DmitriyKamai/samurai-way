import React from "react";
import s from './Users.module.css';
import UserItem from "./UserElement/UserItem";
import * as axios from 'axios';

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.search = React.createRef();
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          this.props.setUsers(response.data.items);
        });
  }

  onUpdateSearch = () => {
    this.props.updateSearch(this.search.current.value);
  }

  render() {
    return (
      <search className={s.findUsers}>
        <h1 className={s.title}>Users</h1>
        <input onChange={this.onUpdateSearch} type="text" ref={this.search} value={this.props.state.searchUserInfo} className={s.search} placeholder="Write name"></input>
        <div className={s.userList}>
          {this.props.state.findedUsers.map(user => <UserItem toggleFriend={this.props.toggleFriend} id={user.id} name={user.name} key={user.user_id} imgSrc={user.avatarSrc} isFriend={user.followed} city={user.city} />)}
        </div>
      </search>
    )
  }
}

export default Users;