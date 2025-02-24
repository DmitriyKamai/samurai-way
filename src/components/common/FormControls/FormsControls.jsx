import React from "react";
import s from './FormControls.module.css';

export const CustomField = ({fieldType, type, input, placeholder, meta: { touched, error, warning }, ...props }) => {
    const hasError = touched && error;
    console.log(type)
    return (
        <div className={s.formControl + " " + (hasError && s.error)}>
            {fieldType === 'textarea' && <textarea {...input} placeholder={placeholder} className={s.input} id=""></textarea>}
            {fieldType === 'input' && <input {...input} type={type} placeholder={placeholder} className={s.input} id=""></input>}
            {hasError && <span>{error}</span>}
        </div>
    )
} 