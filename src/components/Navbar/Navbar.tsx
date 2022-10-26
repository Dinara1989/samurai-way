import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "../Navbar/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.active}>Dialogs</NavLink>
            </div>
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/news" className={({isActive}) => isActive ? s.active : s.link}>News</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/music" className={({isActive}) => isActive ? s.active : s.link}>Music</NavLink>*/}
            {/*</div>*/}
            {/*<div className={s.item}>*/}
            {/*    <NavLink to="/settings" className={({isActive}) => isActive ? s.active : s.link}>Settings</NavLink>*/}
            {/*</div>*/}
        </div>
    );
};

export default Navbar;