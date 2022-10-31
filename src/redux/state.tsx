import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Some post about REACT', likesCount: 12},
            {id: 2, message: 'Some post about JS', likesCount: 1},
            {id: 3, message: 'Some post about HTML', likesCount: 10},
            {id: 4, message: 'Some post about CSS', likesCount: 2},
            {id: 5, message: 'Some post about C++', likesCount: 14}
        ],
        newPostText: 'new Post'
    },
    dialogsPage: {
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Hello, world!'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'I am good!'},
            {id: 5, message: 'Letim!!!'}
        ],
        dialogsData: [
            {id: 1, name: 'Dinara'},
            {id: 2, name: 'Hrayr'},
            {id: 3, name: 'Rocky'},
            {id: 4, name: 'Teacher'},
            {id: 5, name: 'Coach'}
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export default state;