import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom'; 

const setActive = ({isActive}) => isActive ? `${s.dialog} ${s.active}` : s.dialog; 

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={setActive}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png" className={s.dialogImg}/><span>{props.name}</span>
        </NavLink>
    )

}

export default DialogItem;