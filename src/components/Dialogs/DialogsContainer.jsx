import React from "react";
import Dialogs from "./Dialogs";
import { addMessageActionCreator, updateNewMessageActionCreator } from "../../redux/dialogsPage-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


const mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    changeMessage: (text) => {
      dispatch(updateNewMessageActionCreator(text))
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);