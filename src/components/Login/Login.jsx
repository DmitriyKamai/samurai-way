import React from 'react';
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form';
import { CustomField } from '../common/FormControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withHaveAuthRedirect } from '../../hoc/withAuthRedirect';

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData)
    }
    return (
        <main className={s.login}>
            <LoginReduxForm {...props} onSubmit={onSubmit} />
        </main>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.loginForm}>
            <label htmlFor="email" className={s.labelLogin}>Login:</label>
            <Field type="text" validate={[required]} name={'email'} fieldType='input' component={CustomField} />
            <label htmlFor="password" className={s.labelPassword}>Password:</label>
            <Field type="password" validate={[required]} name={'password'} fieldType='input' component={CustomField} />
            <label className={s.rememberMeLabel} htmlFor="rememberMe">
                <Field className={s.rememberMeCheckbox} name={'rememberMe'} component={'input'} id='rememberMe' type="checkbox" />
                Remember me
            </label>
            <button className={s.loginButton}>Sign in</button>
            <div className={s.summaryError}>{props.error}</div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default compose(
    connect(null, { login }),
    withHaveAuthRedirect
)(Login)