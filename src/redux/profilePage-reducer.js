const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  });

let initialState = {
  id: 0,
  name: "Валерий Лохматый",
  wallpaperImgSrc: 'https://niti-d.by/wp-content/uploads/2020/10/15.1.jpg',
  avatarImgSrc: 'https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png',
  posts: [
    {
      post_id: 1, likesCount: 23, message: 'Сегодня ел влажные корма.'
    },
    {
      post_id: 2, likesCount: 3213, message: 'Вчера ел сгущёнку с Богданчоусом'
    },
    {
      post_id: 3, likesCount: 223, message: 'Сегодня встречался с Дашей за гаражами'
    }
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      if (state.newPostText.length) {
        const newPost = {
          post_id: 5,
          likesCount: 0,
          message: state.newPostText
        };
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ""
        };
      }
    case UPDATE_NEW_POST_TEXT: 
      return {
        ...state,
        newPostText: action.newText
      }
    default:
      return state;
  }
}

export default profileReducer