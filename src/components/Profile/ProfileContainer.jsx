import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { getProfile, getStatus, setUserProfile, updateStatus } from "../../redux/profilePage-reducer";
import { toggleIsFetching } from "../../redux/users-reducer";
import { withRouter } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import { compose } from "redux";
import { getAuthSelector, getProfilePageSelector } from "../../redux/selectors";


class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
      
  }
  render() {
    return <main className={s.profile}>
      <ProfileInfo {...this.props} />
      <MyPosts {...this.props} />
    </main>
  }
}

const mapStateToProps = (state) => {
  return {
    state: getProfilePageSelector(state),
    authorisedUserId: getAuthSelector(state).userId,
    isAuth: getAuthSelector(state).isAuth
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfile, toggleIsFetching, getProfile, getStatus, updateStatus }),
  withRouter
)(ProfileComponent);