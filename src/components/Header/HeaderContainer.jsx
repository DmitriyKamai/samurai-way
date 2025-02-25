import React from "react";
import Header from "./Header";
import { getAuthData, logout, setAuthUserData, setAuthUserPhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getAuthData()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return { state: state.auth }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserPhoto, getAuthData, logout})(HeaderContainer);