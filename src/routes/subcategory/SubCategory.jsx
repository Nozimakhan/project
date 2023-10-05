import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';
import ProductCard from '../../components/product-card/ProductCard';
import './SubCategory.scss';

const SubCategory = () => {
    const { subcategoryname } = useParams();
    const [subCategoryData, setSubCategoryData] = useState(null);

    useEffect(() => {
        instance(`/category/subcategories/${subcategoryname}`)
            .then(response => setSubCategoryData(response.data))
            .catch(err => console.log(err));
    }, [subcategoryname])
    return (
        <div className="container">
            <div>
                <div className="category-wrapper">
                    <div className='wrapper-grid'>
                        {
                            subCategoryData?.subCategory.map(categoryProductItem =>
                                <ProductCard productData={categoryProductItem} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubCategory