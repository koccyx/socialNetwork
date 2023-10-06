import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Paginator from '../../commons/Paginator/Paginator.jsx'
import User from './User';

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unFollow, followingProgress, ...props}) => {
  return (
      <div>
        <Paginator currentPage={currentPage}  
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
        />
        {users.map((user) => <User 
          user={user} 
          key={user.id} 
          follow={follow}
          unFollow={unFollow}
          followingProgress={followingProgress}
        />)}
      </div>
  );
};

export default Users;