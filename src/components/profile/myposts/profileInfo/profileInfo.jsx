import React from 'react';
import classes from './profileInfo';
import Preloader from "../../../common/preloader/preloader";
import profilePhoto from '../../../../images/user-red.png';
import ProfileStatusWithHooks from "./profileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={classes.fon}>

            </div>
            <div className={classes.avatar}>

                <img src={props.profile.photos.large=== null? profilePhoto : props.profile.photos.large} alt=''/>
                {props.profile.aboutMe}
                <div> my name is {props.profile.fullName}</div>
                <ProfileStatusWithHooks status = {props.status} updateStatus={props.updateStatus} />
            </div>

        </div>
    )
}

export default ProfileInfo;