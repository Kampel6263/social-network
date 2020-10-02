import React from 'react';
import classes from './dialogs.module.css';
import Item from './item/item';
import Massage from './massage/massage';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Textarea} from "../common/formsControl/formsControl";


const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogsData.map(dialog => <Item name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let massagesElements = state.massagesData.map(massages => <Massage massage={massages.massage} key={massages.id}/>)
    let addNewMassage = (values) => {
        props.sendMassageActionCreator(values.newMessageBody);
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.massages}>
                {massagesElements}
                <AddMassageFormRedux onSubmit={addNewMassage} />
            </div>
        </div>
    )
}
const maxLength14 = maxLengthCreator(10);
const AddMassageForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>

            <div><Field component={Textarea} validate={[required, maxLength14]} name={'newMessageBody'} placeholder='Enter your message'/></div>
            <div>
                <button>Send massage</button>
            </div>
        </form>
    )
}

const AddMassageFormRedux = reduxForm({form: 'dialogAddMassageForm'})(AddMassageForm)

export default Dialogs;