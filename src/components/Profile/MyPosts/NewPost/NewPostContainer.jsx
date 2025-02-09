import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profilePage-reducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../StoreContext";

const NewPostContainer = (props) => {
  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState();

      let addPost = () => {
        store.dispatch(addPostActionCreator());
      };

      let postChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
      };
      return <NewPost
        state={state.profilePage}
        addPost={addPost}
        postChange={postChange} />
    }
    }
  </StoreContext.Consumer>
}

export default NewPostContainer;