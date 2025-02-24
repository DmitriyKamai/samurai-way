import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form';
import { CustomField } from '../common/FormControls/FormsControls';
import { maxLength10, required } from '../../utils/validators/validators';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <main className={s.login}>
            <LoginReduxForm {...props} onSubmit={onSubmit}/>
        </main>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <label htmlFor="login" className={s.labelLogin}>Login:</label>
            <Field type="text" validate={[required, maxLength10]} name={'login'} fieldType='input'component={CustomField} />
            <label htmlFor="password" className={s.labelPassword}>Password:</label>
            <Field type="password" validate={[required, maxLength10]} name={'password'} fieldType='input'component={CustomField} />
            <label className={s.rememberMeLabel} htmlFor="rememberMe">
                <Field className={s.rememberMeCheckbox} name={'rememberMe'} component={'input'} id='rememberMe' type="checkbox" />
                Remember me
            </label>
            <button className={s.loginButton}>Sign in</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;