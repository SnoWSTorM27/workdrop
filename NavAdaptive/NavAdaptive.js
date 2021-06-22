import React from "react";

import Btn from "../Btn/Btn";
import logoSkillDriveNav from "./Logo_SkillDrive.webp";
import closerNav from "./close_icon.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";

import cssNavAdaptive from "./NavAdaptive.module.css";

function NavAdaptive(props) {

    const handleClose = () => {
        props.setTrigger(false)
    }

    return (
        <div>
            <div className={cssNavAdaptive.headerModalWindow}>
                <Link to="/"> 
                    <img src={logoSkillDriveNav} alt="logo SkillDrive" className={cssNavAdaptive.headerLogo} />
                </Link>
                <img src={closerNav} alt="close" onClick={ handleClose } className={cssNavAdaptive.iconClose} /> 
            </div>
            <nav>
                <Link className={cssNavAdaptive.navLink} to="/au">О нас</Link>
                <Link className={cssNavAdaptive.navLink}  to="/au">Условия</Link>
                <Link className={cssNavAdaptive.navLink}  to="/fq">Частые вопросы</Link>   
            </nav>
            <Btn />
        </div>
    )
}

export default NavAdaptive;