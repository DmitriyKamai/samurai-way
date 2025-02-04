import React from "react";
import s from '../Dialogs.module.css'; 

const MessageItem = (props) => {
  const avaLeft = {
    order: 0
  }
  const avaRight = {
    order: 1
  }
  let imgSrc = () => {
    if (props.authorId) {
      return props.imgSrc;
    }
    return "https://i.ibb.co/CDYzqYW/2025-01-29-222000471.png";
  }
  console.log(imgSrc)
  return (
    <div className={props.authorId?s.message:s.selfMessage}>
      <img style={props.authorId?avaLeft:avaRight} src={imgSrc()} alt="" className={s.messageAva} />
      <div className={s.messageText}>
        {props.message}
      </div>
    </div>
  )
}

export default MessageItem;