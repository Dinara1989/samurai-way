import React from 'react';
import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";
import {updateNewPostText} from "../../../redux/state";

const MyPosts = (props: any) => {

    let postsElements = props.posts
        .map( (p: { id: number; message: string; likesCount: number; }) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        let text = newPostElement.current?.value;
        props.addPost(text);
        // props.updateNewPostText('');
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text);
    }

    let div = <>
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText} />
                </div>

                <button onClick={addPost}>Add post</button>

                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>

        </div>
    </>;
    return div;
};

export default MyPosts;