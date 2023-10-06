import React from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import { setProfile, getStatus, updateStatus } from '../../redux/profile-reducer.js';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from 'redux';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
    componentDidMount() {
      let profileId = this.props.router.params.userId ? this.props.router.params.userId : 30024;
      this.props.setProfile(profileId);
      this.props.getStatus(profileId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isAuth={this.props.isAuth}/>
        )
    }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {setProfile, getStatus, updateStatus }),
  withRouter,
)(ProfileContainer);
