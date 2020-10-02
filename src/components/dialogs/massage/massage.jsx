import React from 'react';
import classes from './massage.module.css';

const Massage = (props) =>{
  return(
    <div className={classes.massage}>{props.massage}
    </div>
  )
}

export default Massage;