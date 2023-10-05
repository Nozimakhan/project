import React from 'react';
import settings from '../../assets/images/partners.png';
import { NavLink } from 'react-router-dom';
import './Partners.scss';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const {t} = useTranslation();
  return (
    <>
    <div className="container">
      <div className="partners">
        <h1>{t("partners.partners")}</h1>
        <div className="img__wrapper">
          <img src={settings} alt="" />
          <p>{t("settings.text")}</p>
          <NavLink to={'/'}>{t("subnavbar.main")}</NavLink>         
        </div>
      </div>
    </div>
    </>
  )
}

export default Partners