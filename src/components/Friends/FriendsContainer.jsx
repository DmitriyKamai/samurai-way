import React from "react";
import Friends from "./Friends";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        state: state.users
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer