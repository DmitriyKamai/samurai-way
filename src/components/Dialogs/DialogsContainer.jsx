import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogsPage-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState();

      let addMessage = () => {
        store.dispatch(addMessageActionCreator());

      };
      let changeMessage = (text) => {
        store.dispatch(updateNewMessageActionCreator(text));
      };

      return <Dialogs
        state={state.dialogsPage}
        addMessage={addMessage}
        changeMessage={changeMessage} />
    }}
  </StoreContext.Consumer>

}

export default DialogsContainer;