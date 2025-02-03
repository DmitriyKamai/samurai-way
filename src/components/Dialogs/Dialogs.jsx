import React from "react";
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
      <main className={s.dialogs}>
        <div className={s.dialogsItems}>
          <h2 className={s.title}>Dialogs</h2>
          <div className={s.dialog}>
            <img className={s.dialogAva} src="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" alt="" />
            <div className={s.dialogBody}>
              <div className={s.dialogName}>Сергей Петушенко</div>
              <div className={s.msgPreview}>Поехали на дачу охотиться за мышами, пить молоко, сосать сиску у коровок, гонять собак, лизать свою шерсть и делать котят.</div>
            </div>
          </div>
          <div className={s.dialog}>
            <img className={s.dialogAva} src="https://s1.bloknot-novorossiysk.ru/thumb/850x0xcut/upload/iblock/e84/omyb57mq3bau1kef8z8r9cjxv89x032m/WhatsApp-Image-2023_08_08-at-12.39.20.jpeg" alt="" />
            <div className={s.dialogBody}>
              <div className={s.dialogName}>Лёша Вонючка</div>
              <div className={s.msgPreview}>ПОШЛИ В ДОТУ БЫСТРЕЕ</div>
            </div>
          </div>
        </div>
        <div className={s.messages}>
          <h2 className={s.title}>Messages</h2>
          <div className={s.messagesArea}>
            <div className={s.message}>
              <img src="https://i.pinimg.com/236x/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg" alt="" className={s.messageAva} />
              <div className={s.messageText}>
                Едем на дачу?
              </div>
            </div>
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