import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Input} from "../common/formsControl/formsControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";
import classes from '../common/formsControl/formsControl.module.css';





const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    console.log(props)
    console.log('typescript')

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLength30]} component={Input}  placeholder={'Email'} name={'email'}/></div>
            <div><Field validate={[required, maxLength30]}  component={Input} placeholder={'Password'} type={'password'} name={'password'}/></div>
            { props.error && <div className={classes.formSummaryError}>
                {props.error}
            </div>}
            <div><Field  component={Input} type={'checkbox'} name={'rememberMe'}/> remember me</div>

            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);

