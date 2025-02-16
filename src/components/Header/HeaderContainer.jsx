import React from "react";
import * as axios from 'axios';
import Header from "./Header";
import { setAuthUserData, setAuthUserPhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { authAPI, profileAPI } from "../../API/api";

class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.getAuthUserData()
      .then(data => {
        console.log(data)
        if (data.data.id) {
          let { id, login, email } = data.data;
          this.props.setAuthUserData(id, login, email);
          profileAPI.getProfileInfo(id)
            .then(data => {
              console.log(data)
              this.props.setAuthUserPhoto(data.photos.small);
            });
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return { state: state.auth }
}

export default connect(mapStateToProps, { setAuthUserData, setAuthUserPhoto })(HeaderContainer);