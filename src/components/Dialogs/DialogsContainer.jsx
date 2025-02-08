import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogsPage-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let changeMessage = (text) => {
    props.store.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <Dialogs 
    state={state.dialogsPage}
    addMessage={addMessage}
    changeMessage={changeMessage}/>
  )
}

export default DialogsContainer;