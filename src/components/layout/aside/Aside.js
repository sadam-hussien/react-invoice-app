import React, { useEffect } from "react";

import {connect} from "react-redux";

import {toggleLang, toggleTheme} from "../../../store/actions/Actions";

import {Link} from "react-router-dom";

import Logo from "../../../assets/logo.png";

import {IconAvatar, IconSun, IconMoon} from "../../svg/SvgIcon";

// css file
import "./Aside.scss";

const Aside = ({lang, toggleLang, theme, toggleTheme}) => {

    useEffect( () => {

        document.documentElement.setAttribute("lang", lang);

    }, [lang]);

    useEffect( () => {

        document.documentElement.className = theme + "theme";

    }, [theme])

    const iconStyles = {
        width: "1.1rem",
        fill: "#ffffff"
    }

    return (
        <aside className="d-flex flex-row flex-lg-column justify-content-between align-items-center">

            {/* start logo  */}
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="logo" className="img-fluid" />
                </Link>
            </div>

            {/* start option  */}
            <div className="option">

                {/* start lang  */}
                <div className="toggle-lang d-flex justify-content-center">
                    <button type="button" onClick={toggleLang}>{lang === "en" ? "ar" : "en"}</button>
                </div>
                
                {/* start toggle-theme  */}
                <div className="toggle-theme">
                    <button type="button" onClick={toggleTheme}>
                        {
                            theme === "dark" ? (<IconSun style={iconStyles} />) : (<IconMoon style={iconStyles} />)
                        }
                    </button>
                </div>

                {/* start profile  */}
                <div className="profile">
                    <a href="http://profile-v1.surge.sh" className="the-profile">
                        <IconAvatar style={{width: "1.6rem", fill: "#ffffff"}} />
                    </a>
                </div>

            </div>

        </aside>
    )

}

const mapStateToProps = (state) => {
    return {
        lang: state.lang,
        theme: state.theme
    }
}

export default connect(mapStateToProps, {toggleLang, toggleTheme})(Aside);