import React from "react";
import s from './ProfileInfo.module.css';


class Status extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={s.statusBlock}>
                {this.state.editMode &&
                    <input autoFocus onBlur={this.deactivateEditMode.bind(this)} className={s.statusInput} type="text" value={this.props.status} />
                }
                {!this.state.editMode &&
                    <span onDoubleClick={ this.activateEditMode.bind(this)} className={s.status}>{this.props.status}</span>
                }
            </div>
        )
    }
}

export default Status;