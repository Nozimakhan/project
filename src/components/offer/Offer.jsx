import React from 'react';
import './Offer.scss';
import { useTranslation } from 'react-i18next';

const Offer = () => {
    const {t} = useTranslation();
    return (
        <div className="container">
            <div className="Offer__container">
                <h1>{t("offerTitle.title")}</h1>
                <ul>
                    <li>
                        <h4>{t("first.offer")}</h4>
                        <span>{t("firstDesc.description")}</span>
                    </li>
                    <li>
                        <h4>{t("second.offer")}</h4>
                        <span>{t("secondDesc.description")}</span>
                    </li>
                    <li>
                        <h4>{t("third.offer")}</h4>
                        <span>{t("thirdDesc.description")}</span>
                    </li>
                    <li className='none'>
                        <h4>{t("four.offer")}</h4>
                        <span>{t("fourDesc.description")}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Offer