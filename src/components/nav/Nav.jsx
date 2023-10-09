import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import "./Nav.scss";
import i18n from '../../language/i18next';
import uzbekFlag from "../../assets/images/uzbek.svg";
import russianFlag from "../../assets/images/russian.png";
import { Link, useLocation } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';
import styled from 'styled-components';
const exceptionalRoutes = ["/login", "/admin"];

const Phone = styled(FiPhone)`
    color: #4361ee;
    width: 24px;
    height: 24px;
`;

const Mail = styled(FiMail)`
    color: #4361ee;
    width: 24px;
    height: 24px;
`;

const Nav = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [languageState, setLanguageState] = useState(localStorage.getItem("lang") || "uz");
    function changeLang(selectedLangCode){
        i18n.changeLanguage(selectedLangCode);
        setLanguageState(selectedLangCode);
        dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})
    }
    return !exceptionalRoutes.includes(location.pathname) ? (
        <nav className='nav'>
            <div className="container">
                <div className="nav__container">
                    <div className="empty"></div>
                    <ul>
                        <li>
                            <Link>
                                <img style={languageState === "uz" ? {borderBottom: "3px solid dodgerblue"} : null} src={uzbekFlag} alt="" className='lang_uz_img' onClick={() => changeLang("uz")} />
                            </Link>

                        </li>
                        <li>
                            <Link>
                                <img style={languageState === "ru" ? {borderBottom: "3px solid dodgerblue"} : null} src={russianFlag} alt="" className='lang_uz_img' onClick={() => changeLang("ru")}/>
                            </Link>
                        </li>
                        <li className='contact'>
                            <Link to={"tel: +998 91 186 00 85"}>
                                <Phone />
                                <span>+998 91 186 00 85</span>
                            </Link>
                        </li>
                        <li className='contact'>
                            <Link to={"mailto:erkinjon.hodjaev@gmail.com"}>
                                <Mail />
                                <span>erkinjon.hodjaev@gmail.com</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    ) : <></>
}

export default Nav