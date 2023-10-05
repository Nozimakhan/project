import React from 'react';
import "./Aside.scss";
import { useLocation } from 'react-router-dom';
import { AiOutlineAppstore } from "react-icons/ai";
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { instance } from '../../api/axios';
import { Link } from 'react-router-dom';
import { PiCaretRight } from 'react-icons/pi';
const exceptionalRoutes = ["/product-view", "/login", "/partners", "/about", "/contact", "/admin"]

const Category = styled(AiOutlineAppstore)`
    color: #4361ee;
    width: 35px;
    height: 35px;
`

const Aside = () => {
    const location = useLocation();
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        instance("/category/category-nest")
            .then(response => setCategoryData(response.data))
            .catch(err => console.log(err))
    }, [])
    return !exceptionalRoutes.includes(location.pathname) ?  (
        <div className='aside'>
            <p className='aside-header'><Category />Категория</p>
            <ul className='aside__menu'>
                {
                    localStorage.getItem("lang") === "uz" ? categoryData?.mainCategory_uz?.map((mainCategoryItem, index) =>
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