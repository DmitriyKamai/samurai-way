import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profilePage-reducer";
import NewPost from "./NewPost";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    state: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    postChange: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;