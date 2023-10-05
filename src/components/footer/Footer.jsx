import React from 'react';
import './Footer.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi'
import { RiMailSendLine } from 'react-icons/ri';
import { BiLogoTelegram } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import styled from 'styled-components';
import footerLogo from '../../assets/images/footerlogo.svg';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const exceptionalRoutes = ["/login", "/admin"];

const Location = styled(HiOutlineLocationMarker)`
    color: #fff;
    width: 40px;
    height: 40px;
`;

const Phone = styled(FiPhoneCall)`
    color: #fff;
    width: 40px;
    height: 40px;
`;

const Mail = styled(RiMailSendLine)`
    color: #fff;
    width: 40px;
    height: 40px;
`;

const Telegram = styled(BiLogoTelegram)`
    color: #fff;
    width: 30px;
    height: 30px;
`;

const Facebook = styled(BsFacebook)`
    color: #fff;
    width: 30px;
    height: 30px;
`;

const Youtube = styled(BsYoutube)`
    color: #fff;
    width: 30px;
    height: 30px;
`;

const Footer = () => {
    const location = useLocation();
    const {t} = useTranslation();
    return !exceptionalRoutes.includes(location.pathname) ? (
        <div className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer-top">
                        <div className="footer-top__card">
                            <Location />
                            <div>
                                <b className="Footer_footerHeading__mpgcJ">{t("address.title")}</b>
                                <p className="Footer_footerTitle__-CgIF">{t("addressDesc.address")}</p>
                            </div>
                        </div>

                        <div className="footer-top__card">
                            <Phone />
                            <div>
                                <b className="Footer_footerHeading__mpgcJ">{t("footerContact.title")}</b>
                                <p className="Footer_footerTitle__-CgIF">+998 91 186 00 85</p>
                            </div>
                        </div>

                        <div className="footer-top__card">
                            <Mail />
                            <div>
                                <b className="Footer_footerHeading__mpgcJ">{t("footerMail.title")}</b>
                                <p classn
                                ="Footer_footerTitle__-CgIF">erkinjon.hodjaev@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer-main">
                        <div className="footer-main__card">
                            <div className="footer-main__logo">
                                <img src={footerLogo} alt="" />
                            </div>
                            <div className="footer-main__title">
                                <p>{t("footerContent.text")}</p>
                            </div>
                            <div className="footer-main__follow">
                                <div className="footer-main__heading">
                                    <b>{t("footerMedia.media")}</b>
                                    <div className="footer-main__follow__wrapper">
                                        <NavLink to={"/"}>
                                            <Telegram />
                                        </NavLink>
                                        <NavLink to={"/"}>
                                            <Facebook />
                                        </NavLink>
                                        <NavLink to={"/"}>
                                            <Youtube />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-main__card">
                            <div className="title">
                                <b>{t("links.title")}</b>
                                <div className="footer-line"></div>
                            </div>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>{t("subnavbar.main")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/partners'}>{t("partners.partners")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/about'}>{t("about.about")}</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contact'}>{t("contact.contact")}</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-main__card">
                            <div className="title">
                                <b>{t("offer.title")}</b>
                                <div className="footer-line"></div>
                            </div>
                            <div className="footer-main__title">
                                <p>{t("offerText.content")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <></>
}

export default Footer