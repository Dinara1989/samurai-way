import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Some post about REACT', likesCount: 12},
        {id: 2, message: 'Some post about JS', likesCount: 1},
        {id: 3, message: 'Some post about HTML', likesCount: 10},
        {id: 4, message: 'Some post about CSS', likesCount: 2},
        {id: 5, message: 'Some post about C++', likesCount: 14}
    ]
    let avatarsData = [
        {id: 1, img: 'fbb'},
    ]
    let postsElements = postsData
        .map( p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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