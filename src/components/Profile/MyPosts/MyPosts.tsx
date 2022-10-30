import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsElements = props.posts
        .map( (p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div><textarea></textarea></div>

                <button>Add post</button>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    );
};

export default MyPosts;