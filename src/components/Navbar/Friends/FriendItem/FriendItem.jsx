import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
    <div className={s.friend}>
        <img src="https://img.freepik.com/premium-vector/muzzle-funny-cute-cat-glasses-vector-flat-illustration-portrait-clever-feline-character-isolated-white-background-avatar-cheerful-furry-domestic-animal-adorable-pet-face_198278-9811.jpg" className={s.friendImg}/>
        <h4 className={s.friendText}>{props.name}</h4>
    </div>
    )
} 



export default FriendItem;