import React from "react";
import { addPostActionCreator } from "../../../../redux/profilePage-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPost) => {
      dispatch(addPostActionCreator(newPost));
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;