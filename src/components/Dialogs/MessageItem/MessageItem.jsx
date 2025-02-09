import React from "react";
import s from '../Dialogs.module.css'; 

const MessageItem = (props) => {
  let imgSrc = () => {
    if (props.sender_id) {
      return props.imgSrc;
    }
    return "https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png";
  }
  return (
    <div className={`${s.message} ${props.sender_id?s.otherUserMessage:s.selfMessage}`}>
      <img src={imgSrc()} alt="" className={`${s.messageAva} ${props.sender_id?s.avaLeft:s.avaRight}`} />
      <div className={s.messageText}>
        {props.message}
      </div>
    </div>
  )
}

export default MessageItem;