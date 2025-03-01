import React from "react";
import Header from "./Header";
import { logout, setAuthUserData, setAuthUserPhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { getAuthSelector } from "../../redux/selectors";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return { state: getAuthSelector(state) }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserPhoto, logout})(HeaderContainer);