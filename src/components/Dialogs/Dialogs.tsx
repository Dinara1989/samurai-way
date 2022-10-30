import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export const Dialogs = (props: any) => {

    let dialogsElements = props.state.dialogsData
        .map((d: { id: number; name: string; }) => <DialogItem id={d.id} name={d.name}/>);

    let messagesElements = props.state.messagesData
        .map((m: { id: number; message: string; }) => <Message id={m.id} message={m.message}/>);

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

