import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} className={s.dialogLink} activeClassName={s.active}></NavLink>
      <img className={s.dialogAva} src={props.imgSrc} alt="" />
      <div className={s.dialogBody}>
        <div className={s.dialogName}>{props.name}</div>
        <div className={s.msgPreview}>{props.lastMsg}</div>
      </div>
    </div>
  )
}

const MessageItem = (props) => {
  return (
    <div className={s.message}>
      <img src={props.imgSrc} alt="" className={s.messageAva} />
      <div className={s.messageText}>
        {props.message}
      </div>
    </div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
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

    let messagesData = [
      {
        id: 1,
        message: "Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят",
        imgSrc: "https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg"
      },
    ]

  return (
    <main className={s.dialogs}>
      <div className={s.dialogsItems}>
        <h2 className={s.title}>Dialogs</h2>
        <DialogItem id='1' name="Сергей Петушенко" lastMsg="Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят" imgSrc="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" />
        <DialogItem id='2' name="Лёша Вонючка" lastMsg="ПОГНАЛИ В ДОТУ" imgSrc="https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg" />
        <DialogItem id='3' name="Даша Рублёва" lastMsg="Приходи сегодня за гаражи" imgSrc="https://i.ytimg.com/vi/Deazgd2DRlI/maxresdefault.jpg" />
      </div>
      <div className={s.messages}>
        <h2 className={s.title}>Messages</h2>
        <div className={s.messagesArea}>
          <MessageItem id='1' message="Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят" imgSrc="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" />
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