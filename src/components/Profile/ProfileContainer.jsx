import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { connect } from "react-redux";
import s from './Profile.module.css';
import { getProfile, getStatus, setUserProfile } from "../../redux/profilePage-reducer";
import { toggleIsFetching } from "../../redux/users-reducer";
import { withRouter } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileComponent extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId)
    this.props.getStatus(this.props.match.params.userId)
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
    state: state.profilePage,
  }
}

export default compose(
  connect(mapStateToProps, { setUserProfile, toggleIsFetching, getProfile, getStatus }),
  withAuthRedirect,
  withRouter
)(ProfileComponent);