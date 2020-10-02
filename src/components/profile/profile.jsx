import React from 'react';
import classes from './profile.module.css';
import ProfileInfo from './myposts/profileInfo/profileInfo';
import MyPostsContainer from './myposts/myposts-container';

const Profile = (props) => {



    return (
        <div className={classes.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}


export default Profile;