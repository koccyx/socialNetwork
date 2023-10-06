import React from "react";
import Header from "./Header.jsx";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer.js";


class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profileImg: state.auth.profileImg,
})

export default connect(mapStateToProps, {
  logout
})(HeaderContainer);