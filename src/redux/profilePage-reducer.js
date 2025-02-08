
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  });

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      if (state.newPostText.length) {
        const newPost = {
          id: 5,
          likesCount: 0,
          message: state.newPostText
        };
        state.posts.push(newPost);
        state.newPostText = "";
      }
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}

export default postsReducer