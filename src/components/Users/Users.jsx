import React from "react";
import s from './Users.module.css';
import UserItem from "./UserElement/UserItem";
import * as axios from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.state.currentPage}&count=${this.props.state.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items, response.data.totalCount);
        console.log(response)
      });
    this.search = React.createRef();
  }

  onUpdateSearch = () => {
    this.props.updateSearch(this.search.current.value);
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
    let pagesCount = Math.ceil(this.props.state.totalUsersCount / this.props.state.pageSize);
    let pages = [];
    let firstPage = ((this.props.state.currentPage - 5) < 0) ? 1 : this.props.state.currentPage - 2;
    console.log(firstPage);
    for (let i = firstPage; i < (firstPage + 5) && i <= pagesCount; i++) {
      pages.push(i);
    };
    return (
      <search className={s.findUsers}>
        <div className={s.pages}>
          <span onClick={() => this.onSetPage(1)} className={s.page}>{`<`}</span>
          {pages.map(p => {
            return <span key={p} className={p === this.props.state.currentPage ? s.selectedPage : s.page} onClick={() => this.onSetPage(p)}>{p}</span>
          })}
          <span onClick={() => this.onSetPage(pagesCount)} className={s.page}>{`>`}</span>
        </div>
        <h1 className={s.title}>Users</h1>
        <input onChange={this.onUpdateSearch} type="text" ref={this.search} value={this.props.state.searchUserInfo} className={s.search} placeholder="Write name"></input>
        <div className={s.userList}>
          {this.props.state.findedUsers.map(user => <UserItem toggleFriend={this.props.toggleFriend} key={user.id} id={user.id} name={user.name} imgSrc={user.avatarSrc} isFriend={user.followed} city={user.city} />)}
        </div>
        <button className={s.showMore}  onClick={() => this.showMore(this.props.state.currentPage + 1)}>Показать ещё</button>
      </search>
    )
  }
}

export default Users;