import React from "react";
import Header from "./Header";
import { logout, setAuthUserData, setAuthUserPhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return { state: state.auth }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserPhoto, logout})(HeaderContainer);