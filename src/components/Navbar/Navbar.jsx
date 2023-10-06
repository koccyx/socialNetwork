import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'; 
import Friends from './Friends/Friends';
// import StoreContext from '../../StoreContext.js';

const setActive = ({isActive}) => isActive ? s.active : s.item;

const Navbar = (props) => {
  return(
    <nav className={s.nav}>
      <div>
        <NavLink to='/profile' className={setActive}>Profile</NavLink>
      </div>
      <div>
        <NavLink to='/dialogs' className={setActive}>Dialogs</NavLink>
      </div>
      <div>
        <NavLink to='/users' className={setActive}>Users</NavLink>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
      <Friends friends={props.navPage.friends}/>
    </nav>
  )
}

export default Navbar;