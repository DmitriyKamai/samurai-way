import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

  let dialogs = [
    {
      id: 1,
      name: 'Сергей Петушенко',
      lastMsg: 'Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят',
      imgSrc: 'https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg'
    },
    {
      id: 2,
      name: "Лёша Вонючка",
      lastMsg: "ПОГНАЛИ В ДОТУ",
      imgSrc: "https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg"
    },
    {
      id: 3,
      name: "Даша Рублёва",
      lastMsg: "Приходи сегодня за гаражи",
      imgSrc: "https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg"
    }]

  let messages = [
    {
      id: 1,
      message: "Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят",
      imgSrc: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg"
    }
  ]

  let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} lastMsg={dialog.lastMsg} imgSrc={dialog.imgSrc} />);
  let messagesElements = messages.map(message => <MessageItem id={message.id} message={message.message} imgSrc={message.imgSrc} />);

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