import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { getProfile, setUserProfile } from "../../redux/profilePage-reducer";
import { toggleIsFetching } from "../../redux/users-reducer";
import { withRouter } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";


class ProfileComponent extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId)
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

const ProfileContainer = connect(mapStateToProps, {setUserProfile, toggleIsFetching, getProfile})(withURLDataContainerComponent)


export default ProfileContainer;