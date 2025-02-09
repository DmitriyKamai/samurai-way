import React from "react";
import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";
import StoreContext from "../../StoreContext";

const Friends = (props) => {

    return <StoreContext.Consumer>
        {(store) => {
            let friendsElements = store.getState().sidebar.friends.map(friend => <FriendItem name={friend.name} imgSrc={friend.imgSrc} />)
            return <div className={s.friends}>
                <h2 className={s.title}>Friends</h2>
                <div className={s.wrapper}>
                    {friendsElements}
                </div>
            </div>
        }}
    </StoreContext.Consumer>
}

export default Friends