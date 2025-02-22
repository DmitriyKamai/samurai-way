import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form';

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
            <Field type="text" name={'login'} component={'input'} />
            <label htmlFor="password" className={s.labelPassword}>Password:</label>
            <Field type="password" name={'password'} component={'input'} />
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