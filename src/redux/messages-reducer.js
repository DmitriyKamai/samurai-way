const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text
})

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      if (state.dialogs[0].unsentMessage.length) {
        const newMessage = {
          id: 3,
          authorId: 0,
          message: state.dialogs[0].unsentMessage
        };
        state.dialogs[0].messages.push(newMessage);
        state.dialogs[0].unsentMessage = "";
      }
      return state
    case UPDATE_NEW_MESSAGE:
      state.dialogs[0].unsentMessage = action.newMessage;
      return state
    default:
      return state;
  }

}

export default messagesReducer