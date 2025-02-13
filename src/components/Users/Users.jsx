import React from "react";
import s from './Users.module.css';
import UserItem from "./UserElement/UserItem";

const Users = (props) => {
  console.log(props)
  const search = React.createRef();
  let pagesCount = Math.ceil(props.state.totalUsersCount / props.state.pageSize);
  let pages = [];
  let firstPage = ((props.state.currentPage - 5) < 0) ? 1 : props.state.currentPage - 2;
  for (let i = firstPage; i < (firstPage + 5) && i <= pagesCount; i++) {
    pages.push(i);
  };
  return (
    <search className={s.findUsers}>
      <div className={s.pages}>
        <span onClick={() => props.onSetPage(1)} className={s.page}>{`<`}</span>
        {pages.map(p => {
          return <span key={p} className={p === props.state.currentPage ? s.selectedPage : s.page} onClick={() => props.onSetPage(p)}>{p}</span>
        })}
        <span onClick={() => props.onSetPage(pagesCount)} className={s.page}>{`>`}</span>
      </div>
      <h1 className={s.title}>Users</h1>
      <input onChange={() => props.onUpdateSearch(search.current.value)} type="text" ref={search} value={props.state.searchUserInfo} className={s.search} placeholder="Write name"></input>
      <div className={s.userList}>
        {props.state.findedUsers.map(user => <UserItem toggleFriend={props.toggleFriend} key={user.id} id={user.id} name={user.name} imgSrc={user.avatarSrc} isFriend={user.followed} city={user.city} />)}
      </div>
      <button className={s.showMore} onClick={() => props.showMore(props.state.currentPage + 1)}>Показать ещё</button>
    </search>
  )
}

export default Users;