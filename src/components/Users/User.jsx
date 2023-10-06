import React from 'react';
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

let User = ({user, unFollow, follow, followingProgress}) => {
  return (
      <div>
        <span>
          <NavLink to={`/profile/${user.id}`}>
            <div>
              <img src={user.photos.small ? user.photos.small : 'https://www.meme-arsenal.com/memes/4f31d804bdae6aade2d2b82f3851398f.jpg'} className={styles.avatar_img} alt="cat ava" />
            </div>
          </NavLink>
          <div>
            {user.followed 
              ? <button disabled={followingProgress.some(id => id == user.id)} 
                  onClick={() => {unFollow(user.id)}}
                >Unfollow</button> 
              : <button disabled={followingProgress.some(id => id == user.id)} 
                  onClick={() => {follow(user.id)}}
                >Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{/*{user.location.city}*/}</div>
            <div>{/*{user.location.country}*/}</div>
          </span>
        </span>
      </div>
  )
};

export default User;