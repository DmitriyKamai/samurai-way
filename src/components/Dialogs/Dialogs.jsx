import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(dialog => {
    return <DialogItem id={dialog.id} name={dialog.name} lastMsg={dialog.messages[dialog.messages.length - 1].message} imgSrc={dialog.imgSrc} />;
  })
  let messagesElements = props.dialogsPage.dialogs[0].messages.map(message => <MessageItem authorId={message.authorId} id={message.id} message={message.message} imgSrc={props.dialogsPage.dialogs[0].imgSrc} />);

  let newMessageElement = React.createRef();
  let addNewMessage = (e) => {
    e.preventDefault();
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.setNewMessage(text);
  };

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
          <textarea onChange={onMessageChange} ref={newMessageElement} className={s.newMessageArea} placeholder="Write message" value={props.dialogsPage.dialogs[0].unsentMessage} />
          <button onClick={addNewMessage} className={s.sendMessage}>Send message</button>
        </form>
      </div>
    </main>
  )
}

export default Dialogs;