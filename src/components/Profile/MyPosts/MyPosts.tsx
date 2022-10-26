import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>

                <button>Add post</button>

                <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount='10'/>
                    <Post message='I am fine' likesCount='20'/>
                </div>
            </div>

        </div>
    );
};

export default MyPosts;