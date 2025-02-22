import React from "react";
import s from './ProfileInfo.module.css';


class Status extends React.Component {


    componentDidMount() {

    }

    state = {
        editMode: false,
        status: this.props.status
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

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    

    render() {
        console.log(this.props)
        return (
            <div className={s.statusBlock}>
                {this.state.editMode &&
                    <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode.bind(this)} className={s.statusInput} type="text" value={this.state.status} />
                }
                {!this.state.editMode &&
                    <span onDoubleClick={ this.activateEditMode.bind(this)} className={s.status}>{this.props.status}</span>
                }
            </div>
        )
    }
}

export default Status;