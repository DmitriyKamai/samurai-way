import React from "react";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts);

export default MyPostsContainer;