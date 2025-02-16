import React from 'react';
import s from './Login.module.css'

const Login = (props) => {
    return (
        <main className={s.login}>
            <form action="" className={s.loginForm}>
                <label htmlFor="login" className={s.labelLogin}>Login:</label>
                <input type="text" />
                <label htmlFor="password" className={s.labelPassword}>Password:</label>
                <input type="password" />
            </form>
        </main>
    )
}

export default Login;