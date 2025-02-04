import React from "react";
import s from '../Dialogs.module.css';
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

export default DialogItem;