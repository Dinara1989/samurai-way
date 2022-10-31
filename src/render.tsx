import ReactDOM from "react-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";
import React from "react";

export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}