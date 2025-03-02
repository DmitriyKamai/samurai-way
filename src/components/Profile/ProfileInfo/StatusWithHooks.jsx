import React, { useState } from "react";
import s from './ProfileInfo.module.css';


const StatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className={s.statusBlock}>
            {editMode &&
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} className={s.statusInput} type="text" value={status} />
            }
            {!editMode &&
                <span onDoubleClick={activateEditMode} className={s.status}>{props.status || 'Set status'} </span>
            }
        </div>
    )

}

export default StatusWithHooks;