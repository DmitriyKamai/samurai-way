import React from "react";
import preloader from "./preloader.svg"
import s from "./Preloader.module.css"

const Preloader = () => {
    return <img className={s.preloader} src={preloader} alt="" />
}

export default Preloader