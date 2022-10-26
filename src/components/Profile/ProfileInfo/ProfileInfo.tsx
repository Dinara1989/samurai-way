import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.pic}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/05/krasivii-fon-na-rabochii-stol.orig_.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                AVA+descrip
            </div>
        </div>
    );
};

export default ProfileInfo;