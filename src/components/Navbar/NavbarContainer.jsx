import Navbar from './Navbar.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    navPage: state.navPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {};
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;