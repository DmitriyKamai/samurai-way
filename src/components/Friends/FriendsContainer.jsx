import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import * as axios from 'axios';
import { setAuthUserData } from "../../redux/auth-reducer";
import { getUsersSelector } from "../../redux/selectors";


class FriendsContainer extends React.Component {
    render() {
        return <Friends {...this.props} />
    }
}


const mapStateToProps = (state) => {
    return {
        state: getUsersSelector(state),
    }
}

export default connect(mapStateToProps, {setAuthUserData})(FriendsContainer);