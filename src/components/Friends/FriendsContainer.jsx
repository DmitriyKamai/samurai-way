import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";
import * as axios from 'axios';
import { setAuthUserData } from "../../redux/auth-reducer";


class FriendsContainer extends React.Component {
    render() {
        return <Friends {...this.props} />
    }
}


const mapStateToProps = (state) => {
    return {
        state: state.users,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(FriendsContainer);