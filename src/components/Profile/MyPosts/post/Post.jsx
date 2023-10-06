import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6HgzO3_-oWvYiYnJ8zKWWnGrFu7kVclWN3g&usqp=CAU"/>
                <div className={s.item__inner}>
                    <div>{props.message}</div>
                    <div>
                        <span>Like <span>{props.likes}</span> </span>
                        <span>Dislike <span>{props.dislikes}</span> </span>
                    </div>
                </div>
            </div>
    )
}

Post.defaultProps = {
    likes:0,
    dislikes: 0,
}

export default Post;