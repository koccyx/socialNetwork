import s from './Friends.module.css'
import FriendItem from './FriendItem/FriendItem.jsx';

const Friends = (props) => {
    let friendsElements = props.friends.map((elem) => <FriendItem name={elem.name} key={elem.id}/>)
    return (
        <div>
            <h2>Friends</h2>
            <div className={s.container}>
                {friendsElements}
            </div>
        </div>
    )
}  

export default Friends;