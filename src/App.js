import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {Route, Routes} from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store.js';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) return <div>Loading</div> 
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <React.Suspense fallback={<div>Loading</div>}>
              <Routes>
                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                <Route path='/users/*' element={<UsersContainer/>}/>
                <Route path='/login/*' element={<Login/>}/>
              </Routes>
            </React.Suspense>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized : state.app.initialized,
})

let AppContainer =  connect(mapStateToProps, {
  initializeApp
})(App);

const SamuraiJSApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
        <AppContainer/>
      </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default SamuraiJSApp;
