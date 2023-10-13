import React from 'react';
import './Subnav.scss';
import logo from '../../assets/images/logo.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';
import Aside from '../aside/Aside';
import { useState, useEffect } from 'react';
import { instance } from '../../api/axios';
import { Link } from 'react-router-dom';
import errorImg from "../../assets/images/error.png";
import { useTranslation } from 'react-i18next';
const exceptionalRoutes = ["/login", "/admin", "/admin/order", "/admin/create", "/admin/order/all", "/admin/order/contacted", "/admin/order/not-contacted"];

const Search = styled(FiSearch)`
  color: #fff;
  width: 30px;
  height: 30px;
`;

const Subnav = () => {
  const location = useLocation();
  const {t} = useTranslation();
  const [inputSearch, setInputSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    instance(`product/search/${inputSearch}`)
      .then(response => setSearchResults(response.data))
      .catch(err => {
        setSearchResults([])
      })
  }, [inputSearch])

  return !exceptionalRoutes.includes(location.pathname) ? (
    <div className='subnav'>
      <div className="container">
        <div className="subnav1">
          <div className="subnav__main">
            <NavLink to={"/"} className='logoImg'>
              <img src={logo} alt="logo" />
            </NavLink>
            <div className="search">
              <form>
                <input type="text" placeholder={t("input.placeholder")} value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <button><Search /></button>
                {searchResults.length > 0 || inputSearch.length !== 0 ? <div className="search__results">
                  {
                    searchResults?.map(searchedItem =>
                      <Link to={`/product-view/${searchedItem._id}`}>
                        <div className='search__results-item'>
                          <img className='search__img' src={searchedItem?.productImages[0]} alt="" />
                          <h4>{searchedItem?.productName_uz}</h4>
                          <strong>{`${searchedItem?.productSizesAndQuantity[0].price} ${searchedItem?.productSizesAndQuantity.length > 1 ? "- " + searchedItem?.productSizesAndQuantity.reverse()[0].price : ""} СУМ`}</strong>
                        </div>
                      </Link>
                    )
                  }
                  {searchResults.length === 0 && inputSearch.length !== 0 ? <img className='nosearch-result-img' src={errorImg} alt="" /> : null}
                </div> : <></>}
              </form>
            </div>
          </div>

          <div className="list">
            <Aside />
            <div className="empty"></div>
            <ul className='subnav-list'>
              <li className='subnav-listitem'>
                <NavLink to={'/'}>{t("subnavbar.main")}</NavLink>
              </li>
              <li className='subnav-listitem'>
                <NavLink to={'/partners'}>{t("partners.partners")}</NavLink>
              </li>
              <li className='subnav-listitem'>
                <NavLink to={'/about'}>{t("about.about")}</NavLink>
              </li>
              <li className='subnav-listitem'>
                <NavLink to={'/contact'}>{t("contact.contact")}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : <></>
}

export default Subnav