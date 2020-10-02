import React from "react";
import classes from './users.module.css';
import userPhoto from './../../images/user-red.png';
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= 38; i++) { //38 = pagesCount
        pages.push(i);
    }
    // console.log(props.currentPage);

    return (

        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChange(p)
                    }} className={props.currentPage === p && classes.selectedPage} key={p.id}>{p}</span>
                    console.log(p);
                })}
            </div>
            {
                props.users.map(u => <div className={classes.container} key={u.id}>

                    <div>
                        <div><NavLink to={'/profile/' + u.id}><img className={classes.avatar}
                                                                   src={u.photos.small != null ? u.photos.small : userPhoto}
                                                                   alt=""/></NavLink></div>
                        <div>
                            {u.followed
                                ? <button className={props.followingInProgress.some(id => id === u.id)
                                    ? classes.disabled
                                    : classes.unfollow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button className={props.followingInProgress.some(id => id === u.id)
                                ? classes.disabled
                                : classes.follow} disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {

                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div className={classes.descriptions}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)

            }
        </div>
    )
}

export default Users;