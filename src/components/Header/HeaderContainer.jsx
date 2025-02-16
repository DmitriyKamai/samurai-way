import React from "react";
import * as axios from 'axios';
import Header from "./Header";
import { setAuthUserData, setAuthUserPhoto } from "../../redux/auth-reducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
      .then(response => {
        if (response.data.data.id) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, login, email);
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
              console.log(response)
              this.props.setAuthUserPhoto(response.data.photos.small);
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