import React from 'react';
import "./About.scss";
import aboutImage from "../../../src/assets/images/about.jpg";
import { useTranslation } from 'react-i18next';

const About = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="About__container">
        <h1 className="About__hero">{t("aboutTitle.title")}</h1>
        <p>{t("greeting.text")}</p>
        <p>{t("aboutFirst.text")}</p>
        <p>{t("aboutSecond.text")}</p>
        <img className="About__hero" src={aboutImage} alt=""/>
          <p>{t("types.title")}</p>
          <ul className="About__list">
            <li>{t("li1.text")}</li>
            <li> {t("li2.text")}</li>
            <li> {t("li3.text")}</li>
            <li> {t("li4.text")}</li>
            <li> {t("li5.text")}</li>
            <li> {t("li6.text")}</li>
            <li> {t("li7.text")}</li>
            <li> {t("li8.text")}</li>
          </ul>
      </div>
    </div>
  )
}

export default About