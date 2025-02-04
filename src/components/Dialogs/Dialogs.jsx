import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {


  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} lastMsg={dialog.lastMsg} imgSrc={dialog.imgSrc} />);
  let messagesElements = props.state.messages.map(message => <MessageItem id={message.id} message={message.message} imgSrc={message.imgSrc} />);

  return (
    <main className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h2 className={s.title}>Dialogs</h2>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <h2 className={s.title}>Messages</h2>
        <div className={s.messagesArea}>
          {messagesElements}
        </div>
        <form action="" className={s.newMessage}>
          <textarea className={s.newMessageArea} placeholder="Write message" name="newMessageArea" id="newMessageArea" />
          <button className={s.sendMessage}>Send message</button>
        </form>
      </div>
    </main>
  )
}

export default Dialogs;