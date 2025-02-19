import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map(dialog => {
    let lastMsg = props.state.messages.filter(message => message.sender_id === dialog.dialog_id || message.receiver_id === dialog.dialog_id).at(-1);
    return <DialogItem
      dialog_id={dialog.dialog_id}
      name={dialog.name}
      key={dialog.dialog_id}
      lastMsg={lastMsg.sender_id ? lastMsg.message : `You: ${lastMsg.message}`}
      imgSrc={dialog.imgSrc} />;
  })
  let messagesElements = props.state.messages.map(message => <MessageItem
    sender_id={message.sender_id}
    key={message.message_id}
    message_id={message.message_id}
    message={message.message}
    imgSrc={props.state.dialogs[0].imgSrc} />);

  let newMessageElement = React.createRef();
  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.changeMessage(text);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />

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
        <div className={s.newMessage}>
          <textarea onChange={onMessageChange} ref={newMessageElement} className={s.newMessageArea} placeholder="Write message" value={props.state.dialogs[0].unsentMessage} />
          <button onClick={onAddMessage} className={s.sendMessage}>Send message</button>
        </div>
      </div>
    </main>
  )
}

export default Dialogs;