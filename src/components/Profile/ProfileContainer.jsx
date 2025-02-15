import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { setUserProfile } from "../../redux/profilePage-reducer";
import * as axios from 'axios';
import { toggleIsFetching } from "../../redux/users-reducer";


class ProfileComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUserProfile(response.data);
        console.log(response)
      });
  }
  render() {
    return  <main className={s.profile}>
      <ProfileInfo {...this.props} />
      <MyPostsContainer />
    </main>
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

const ProfileContainer = connect(mapStateToProps,
  { setUserProfile, toggleIsFetching }
)(ProfileComponent)


export default ProfileContainer;