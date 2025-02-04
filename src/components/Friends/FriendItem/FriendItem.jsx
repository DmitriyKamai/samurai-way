import React from "react";
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.friend}>
            <img className={s.ava} src={props.imgSrc} alt="" />
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendItem