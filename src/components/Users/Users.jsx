import React from "react";
import s from './Users.module.css';
import UserItem from "./UserElement/UserItem";
import * as axios from 'axios';




const Users = (props) => {
  if (props.state.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
      console.log(response.data.items);
      props.setUsers(response.data.items);
    });
  }
  const search = React.createRef();
  const onUpdateSearch = () => {
    console.log(search.current.value)
    props.updateSearch(search.current.value);
  }
  let userElements = props.state.findedUsers.map(user => <UserItem toggleFriend={props.toggleFriend} id={user.id} name={user.name} key={user.user_id} imgSrc={user.avatarSrc} isFriend={user.followed} city={user.city} />)
  return (
    <search className={s.findUsers}>
      <h1 className={s.title}>Users</h1>
      <input onChange={onUpdateSearch} type="text" ref={search} value={props.state.searchUserInfo} className={s.search} placeholder="Write name"></input>
      <div className={s.userList}>
        {userElements}
      </div>
    </search>
  )
}

export default Users;