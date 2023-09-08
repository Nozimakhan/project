import React from 'react'
import "./Nav.scss";
import uzbekFlag from "../../assets/images/uzbek.svg";
import russianFlag from "../../assets/images/russian.png";
import { Link } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="container">
                <div className="empty"></div>
                <ul>
                    <li>
                        <Link>
                            <img src={uzbekFlag} alt="" />
                        </Link>

                    </li>
                    <li>
                        <Link>
                            <img src={russianFlag} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link to={"tel: +998 91 186 00 85"}>
                            <p><FiPhone /> +998 91 186 00 85</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"mailto:erkinjon.hodjaev@gmail.com"}>
                            <p><FiMail /> erkinjon.hodjaev@gmail.com</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav