import React from "react";
import s from './Users.module.css';
import UserItem from "./UserElement/UserItem";

const Users = (props) => {
  const search = React.createRef();
  const onUpdateSearch = () => {
    console.log(search.current.value)
    props.updateSearch(search.current.value);
  }
  let userElements = props.state.findedUsers.map(user => <UserItem toggleFriend={props.toggleFriend} id={user.user_id} name={user.name} key={user.user_id} imgSrc={user.avatarSrc} isFriend={user.isFriend} city={user.city} />)
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