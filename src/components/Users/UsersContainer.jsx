import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, unFollow, getUsersThunkCreator, toggleIsFollowingProgress, changePage } from '../../redux/users-reducer';
import Users from './Users.jsx';
import preloader from '../../assets/images/preloader.svg';
import { getUsersSuperSelector,getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from '../../redux/users-selectors.js';


class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  }
  
  render() {
    return (<>
      { this.props.isFetching ? <img src={preloader} alt='loading'/> : null}
      <Users 
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingProgress={this.props.followingProgress}
      />
      </>
    )
  }
}


// const mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingProgress: state.usersPage.followingProgress,
//   }
// } 

const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
} 


export default compose(
  connect(mapStateToProps, {follow, unFollow, changePage, toggleIsFollowingProgress, getUsers: getUsersThunkCreator, getUsersSuperSelector})
)(UsersContainer)