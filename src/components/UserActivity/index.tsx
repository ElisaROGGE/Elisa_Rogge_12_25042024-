import React from 'react';
import data from '../../data.ts'
import './index.css'

interface UserActivityProps {}

const UserActivity: React.FC<UserActivityProps> = () => {

    console.log(data)
    const userName = data.USER_MAIN_DATA.map((user) => user.userInfos.firstName)


    return (
        <div className='user p-5'>
            <h2 className='user-name font-semibold text-2xl'>
                Bonjour <span className='firstname '>{userName}</span>
            </h2>
            <span className='congrats'>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    );
};

export default UserActivity;