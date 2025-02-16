import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { setUserProfile } from "../../redux/profilePage-reducer";
import * as axios from 'axios';
import { toggleIsFetching } from "../../redux/users-reducer";
import { withRouter } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import { profileAPI } from "../../API/api";


class ProfileComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    profileAPI.getProfileInfo(userId)
      .then(data => {
        this.props.toggleIsFetching(false);
        this.props.setUserProfile(data);
        console.log(data)
      });
  }
  render() {
    return  <main className={s.profile}>
      <ProfileInfo {...this.props} />
      <MyPosts {...this.props} />
    </main>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

let withURLDataContainerComponent = withRouter(ProfileComponent)

const ProfileContainer = connect(mapStateToProps, {setUserProfile, toggleIsFetching })(withURLDataContainerComponent)


export default ProfileContainer;