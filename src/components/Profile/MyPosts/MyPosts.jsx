import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = React.memo((props) => {
    let postsElements = props.posts.map((elem) => <Post message={elem.message} likes={elem.likes} dislikes={elem.dislikes} key={elem.id}/>)

    let newPostElement = React.createRef(); 

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div>
            <h1>My posts</h1>
            <div className={s.postsBlock}>
                <textarea ref={ newPostElement } value={ props.newPostText } onChange={ onPostChange }/>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;