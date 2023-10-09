import React from 'react';
import './ProductCard.scss';
import { DefaultButton } from '../../utils/Utils';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import { FaRegHandPointer } from 'react-icons/fa';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Click = styled(FaRegHandPointer)`
    color: #fff;
    width: 22px;
    height: 22px;
`;


const ProductCard = ({ productData }) => {
    const currentLng = useSelector(state => state.language.lang);
    const {t} = useTranslation();
    return (
        <div className='product-card'>
            <Link to={`/product-view/${productData._id}`}>
                <img src={productData.productImages[0]} alt="" />
            </Link>
            <h3 title={currentLng === "uz" ? productData?.productName_uz : productData?.productName_ru}>{currentLng === "uz" ? productData.productName_uz.length > 20 ? productData.productName_uz.slice(0, 20) + "..." : productData.productName_uz : productData.productName_ru.length > 20 ? productData.productName_ru.slice(0, 20) + "..." : productData.productName_ru}</h3>
            <div className="product-card__categories">
                <span>{currentLng === "uz" ? productData?.productMainCategory_uz : productData?.productMainCategory_ru}</span>
                <FiChevronRight />
                <span>{currentLng === "uz" ? productData?.productSubCategory_uz : productData?.productSubCategory_ru}</span>
            </div>
            <div className="product-card__price">
                {`${productData?.productSizesAndQuantity[0].price} ${productData?.productSizesAndQuantity.length > 1 ? "- " + productData?.productSizesAndQuantity.reverse()[0].price : ""} СУМ`}
            </div>
            {productData.productSizesAndQuantity.length > 1 ? <Link className='default-btn' to={`/product-view/${productData._id}`}><Click/> {t("click.option")}</Link> : <DefaultButton text={t("addtocart.add")} />}
        </div>
    )
}

export default ProductCard