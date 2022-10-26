import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem = (props:DialogItemType) => {
    let path = "/dialogs" + props.id;
    return <div>
        <NavLink to={path} >{props.name}</NavLink>
    </div>
}
const Message = (props:any) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dinara" id={1} />
                <DialogItem name="Hrayr" id={2} />
                <DialogItem name="Rocky" id={3} />
                <DialogItem name="Teacher" id={4}/>
                <DialogItem name="Coach" id={5} />
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="How are you?"/>
                <Message message="I'm fine"/>
            </div>
        </div>
    );
};

