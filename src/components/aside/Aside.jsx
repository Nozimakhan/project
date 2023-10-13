import React from 'react';
import "./Aside.scss";
import { useLocation } from 'react-router-dom';
import { AiOutlineAppstore } from "react-icons/ai";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { instance } from '../../api/axios';
import { Link } from 'react-router-dom';
import { PiCaretRight } from 'react-icons/pi';
import { useSelector } from 'react-redux';

const Category = styled(AiOutlineAppstore)`
    color: #4361ee;
    width: 35px;
    height: 35px;
`

const Aside = () => {
    const currentLng = useSelector(state => state.language.lang);
    const location = useLocation();
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        instance("/category/category-nest")
            .then(response => setCategoryData(response.data))
            .catch(err => console.log(err))
    }, [])
    return !location.pathname.includes("product-view") && !location.pathname.includes("partners") && !location.pathname.includes("about") && !location.pathname.includes("contact") && !location.pathname.includes("/admin/order") && !location.pathname.includes("/admin/create") ?  (
        <div className='aside'>
            <p className='aside-header'><Category />Категория</p>
            <ul className='aside__menu'>
                {
                    currentLng === "uz" ? categoryData?.mainCategory_uz?.map((mainCategoryItem, index) =>
                    <li key={index} className='aside__menu-item'>
                        <Link to={`/mainCategory/${mainCategoryItem}`}>{mainCategoryItem}</Link>
                        <PiCaretRight />
                        <div className='sub__category-item'>
                            {
                                categoryData?.productSubCategories_uz[index].map((subCategoryItem, ind) =>
                                    <Link key={ind} to={`/subcategory/${subCategoryItem}`}>{subCategoryItem}</Link>
                                )
                            }
                        </div>
                    </li>
                ) : categoryData?.mainCategory_ru?.map((mainCategoryItem, index) =>
                <li key={index} className='aside__menu-item'>
                    <Link to={`/mainCategory/${mainCategoryItem}`}>{mainCategoryItem}</Link>
                    <PiCaretRight />
                    <div className='sub__category-item'>
                        {
                            categoryData?.productSubCategories_ru[index].map((subCategoryItem, ind) =>
                                <Link key={ind} to={`/subcategory/${subCategoryItem}`}>{subCategoryItem}</Link>
                            )
                        }
                    </div>
                </li>
            )
                }
            </ul>
        </div>
    ) : <></> 
}

export default Aside