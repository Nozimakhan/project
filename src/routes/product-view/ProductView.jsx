import React, { useState } from 'react';
import './ProductView.scss';
import Offer from '../../components/offer/Offer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { instance } from '../../api/axios';
import { PiCaretRight } from 'react-icons/pi';
import { LiaDotCircleSolid } from 'react-icons/lia';
import { PiShoppingCartDuotone } from 'react-icons/pi';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Circle = styled(LiaDotCircleSolid)`
  color: #000;
  width: 25px;
  height: 25px;
`;

const Cart = styled(PiShoppingCartDuotone)`
  color: #fff;
  width: 35px;
  height: 35px;
`;

const ProductView = () => {
  const dispatch = useDispatch();
  const currentLng = useSelector(state => state.language.lang);
  const {t} = useTranslation();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [itemCounter, setItemCounter] = useState(1);
  const [activeImageNumber, setactiveImageNumber] = useState(0);
  const [productViewData, setProductViewData] = useState(null);
  let productDataInURL = useParams();
  useEffect(() => {
    instance(`/product/single-product/${productDataInURL.id}`)
      .then(response => setProductViewData(response.data?.singleProduct?.at(0)))
      .catch(err => console.log(err))
  }, [productDataInURL.id])



  function decrement() {
    if (itemCounter > 1) {
      setItemCounter(itemCounter - 1)
    }
  }


  function increment() {
    if (itemCounter < +productViewData?.productSizesAndQuantity?.[selectedVariant].quantity) {
      setItemCounter(itemCounter + 1)
    }
  }


  function addToCart(product) {
    const {productSizesAndQuantity, ...rest} = product;
    rest.selectedType = productSizesAndQuantity[selectedVariant];
    rest.count = itemCounter;
    rest.totalPrice = itemCounter * +productViewData?.productSizesAndQuantity?.[selectedVariant].price;
    dispatch({product: rest, type: "ADD_TO_CART"})
  }


  return (
    <div>
      <div className="container">
        <div className="product-view">
          <div className="product-view__left">
            <img className='productImg' src={productViewData?.productImages[activeImageNumber]} alt="" />
            <div className="product-view__images">
              {
                productViewData?.productImages.map((productImageThumb, ind) =>
                  <img key={ind} style={ind === activeImageNumber ? { border: "2px solid dodgerblue" } : { border: "2px solid gray" }} src={productImageThumb} alt="" onClick={() => setactiveImageNumber(ind)} />
                )
              }
            </div>
          </div>
          <form className="product-view__right">
            <h1>{currentLng === "uz" ? productViewData?.productName_uz : productViewData?.productName_ru}</h1>
            <div className="product-view__category__wrapper">
              <div className='product-view__category'>{currentLng === "uz" ? productViewData?.productMainCategory_uz : productViewData?.productMainCategory_ru}</div>
              <PiCaretRight />
              <div className='product-view__category'>{currentLng === "uz" ? productViewData?.productSubCategory_uz : productViewData?.productSubCategory_ru}</div>
            </div>
            <div className="product-view__select">
              <h2 className='store'>{t("store.basa")} <span>{productViewData?.productSizesAndQuantity[selectedVariant].quantity}</span></h2>
              <h2>{t("size.size")}</h2>
              <select onChange={(e) => {
                setSelectedVariant(+e.target.value)
                setItemCounter(1)
              }}>{
                  productViewData?.productSizesAndQuantity.map((productItemVariant, ind) =>
                    <option key={ind} value={ind}>{productItemVariant.size}</option>
                  )
                }</select>
            </div>
            <h1 className='product-view__price'>{productViewData?.productSizesAndQuantity?.[selectedVariant].price} СУМ</h1>
            <div className="descriptions">
              <div className="product-view__description">
                <Circle />
                <p>{currentLng === "uz" ? productViewData?.productDescription_uz[0] : productViewData?.productDescription_ru[0]}</p>
              </div>
              <div className="product-view__description">
                <Circle />
                <p>{currentLng === "uz" ? productViewData?.productDescription_uz[1] : productViewData?.productDescription_ru[1]}</p>
              </div>
              <div className="product-view__description">
                <Circle />
                <p>{currentLng === "uz" ? productViewData?.productDescription_uz[2] : productViewData?.productDescription_ru[2]}</p>
              </div>
            </div>
            <div className="product-view__price__container">
              <div className="button__wrapper">
                <h2>{t("quantity.number")}</h2>
                <div className="button">
                  <button type='button' onClick={decrement}>-</button>
                  <span>{itemCounter}</span>
                  <button type='button'  onClick={increment}>+</button>
                </div>
              </div>
              <div className="price__wrapper">
                <h2>{t("price.price")}</h2>
                <div className="price">
                  <p>{itemCounter * +productViewData?.productSizesAndQuantity?.[selectedVariant].price} СУМ</p>
                </div>
              </div>
              <div className="cart__wrapper">
                <h2>.</h2>
                <button type='button' onClick={() => addToCart(productViewData)} className="addtocart">
                  <Cart />
                  <p>{t("addtocart.add")}</p>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
      <Offer />
    </div>
  )
}

export default ProductView