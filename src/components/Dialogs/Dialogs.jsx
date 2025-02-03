import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
      <main className={s.dialogs}>
        <div className={s.contacts}>
          <h2 className={s.title}>Contacts</h2>
        </div>
        <div className={s.messages}>
          <h2 className={s.title}>Messages</h2>
          <div className={s.messagesArea}></div>
          <form action="" className={s.newMessage}>
            <textarea className={s.newMessageArea} placeholder="Write message" name="newMessageArea" id="newMessageArea" />
            <button className={s.sendMessage}>Send</button>
          </form>
        </div>
      </main>
    )
}

export default Dialogs;