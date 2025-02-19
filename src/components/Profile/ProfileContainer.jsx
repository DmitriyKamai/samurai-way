import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { getProfile, setUserProfile } from "../../redux/profilePage-reducer";
import { toggleIsFetching } from "../../redux/users-reducer";
import { Redirect, withRouter } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";


class ProfileComponent extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId)
  }
  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'} />
    return <main className={s.profile}>
      <ProfileInfo {...this.props} />
      <MyPosts {...this.props} />
    </main>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    isAuth: state.auth.isAuth
  }
}

let withURLDataContainerComponent = withRouter(ProfileComponent)

const ProfileContainer = connect(mapStateToProps, { setUserProfile, toggleIsFetching, getProfile })(withURLDataContainerComponent)


export default ProfileContainer;