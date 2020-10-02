import React from 'react';
import classes from './item.module.css';
import { NavLink } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
  )
}

export default Item;