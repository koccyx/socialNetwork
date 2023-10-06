import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
    <header className={s.header}>
        <img className={s.headerLogo} alt='avatar' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png'/>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            {props.isAuth ? <img className={s.profileImg} src={props.profileImg} alt="" /> : ''}
        </div>
    </header>
    )
}

export default Header;