import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import { Field, reduxForm } from "redux-form";

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
    imgSrc={props.state.dialogs[0].imgSrc} />
  );

  const onSubmit = (formData) => {
    console.log(formData)
    props.addMessage(formData.newMessageBody)
}

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
        <AddMessageReduxForm {...props} onSubmit={onSubmit} />
      </div>
    </main>
  )
}

const AddMessageForm = (props) => {
  let newMessageElement = React.createRef();

  return (
    <form onSubmit={props.handleSubmit} className={s.newMessage}>
      <Field name='newMessageBody' ref={newMessageElement} className={s.newMessageArea} placeholder="Write message" value={props.state.dialogs[0].unsentMessage} component={'textarea'} />
      <button className={s.sendMessage}>Send message</button>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;