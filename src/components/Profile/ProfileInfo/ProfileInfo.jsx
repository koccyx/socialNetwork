import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <div>
                <div>Loading</div>
            </div>
        )
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile?.photos?.large ? props.profile.photos.large : 'https://www.meme-arsenal.com/memes/4f31d804bdae6aade2d2b82f3851398f.jpg'} alt="" />
                <h3>Fullname: {props.profile.fullName}</h3>
                <h3>About me: {props.profile.aboutMe}</h3>
                <ProfileStatusWithHooks status={props.status} isAuth={props.isAuth} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;