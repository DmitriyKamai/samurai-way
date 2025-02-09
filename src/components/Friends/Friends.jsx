import React from "react";
import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

const Friends = (props) => {

    let friendsElements = props.state.friends.map(friend => <FriendItem name={friend.name} imgSrc={friend.imgSrc} />)
    return <div className={s.friends}>
        <h2 className={s.title}>Friends</h2>
        <div className={s.wrapper}>
            {friendsElements}
        </div>
    </div>
}

export default Friends