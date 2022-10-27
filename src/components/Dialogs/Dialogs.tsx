import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dinara'},
        {id: 2, name: 'Hrayr'},
        {id: 3, name: 'Rocky'},
        {id: 4, name: 'Teacher'},
        {id: 5, name: 'Coach'}
    ]

    let messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Hello, world!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'I am good!'},
        {id: 5, message: 'Letim!!!'}
    ]

    let dialogsElements = dialogsData
        .map(d => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = messageData
        .map(m => <Message id={m.id} message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

