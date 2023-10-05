import React from 'react';
import "./Contact.scss";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi'
import { RiMailSendLine } from 'react-icons/ri';
import { BiLogoTelegram } from 'react-icons/bi';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Location = styled(HiOutlineLocationMarker)`
    color: #4361ee;
    width: 40px;
    height: 40px;
`;

const Phone = styled(FiPhoneCall)`
    color: #4361ee;
    width: 40px;
    height: 40px;
`;

const Mail = styled(RiMailSendLine)`
    color: #4361ee;
    width: 40px;
    height: 40px;
`;

const Telegram = styled(BiLogoTelegram)`
    color: #4361ee;
    width: 30px;
    height: 30px;
`;

const Facebook = styled(BsFacebook)`
    color: #4361ee;
    width: 30px;
    height: 30px;
`;

const Youtube = styled(BsYoutube)`
    color: #4361ee;
    width: 30px;
    height: 30px;
`;

const Contact = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="contact__container">
        <h1>{t("footerContact.title")}</h1>
        <ul className='contact-list'>
          <li>
            <Phone/>
            <Link to={"tel: +998911860085"}>+998911860085</Link>
          </li>
          <li>
            <Mail/>
            <Link to={"mailto: erkinjon.hodjaev@gmail.com"}>erkinjon.hodjaev@gmail.com</Link>
          </li>
          <li>
            <Location/>
            <Link>{t("addressDesc.address")}</Link>
          </li>
        </ul>
        <div className="media-part">
          <h3>{t("footerMedia.media")}</h3>
          <ul>
            <li>
              <Link><Telegram/></Link>
            </li>
            <li>
              <Link><Facebook/></Link>
            </li>
            <li>
              <Link><Youtube/></Link>
            </li>
          </ul>
        </div>
        <div className="map">
          <iframe title="map&quot;" className="Contact_map__iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.355024311767!2d71.58551931541363!3d40.99560197930208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1e122151052b5932!2zNDDCsDU5JzQ0LjIiTiA3McKwMzUnMTUuOCJF!5e0!3m2!1sen!2sus!4v1656415605338!5m2!1sen!2sus" ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact