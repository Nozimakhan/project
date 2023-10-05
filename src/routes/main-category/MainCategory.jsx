import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';
import ProductCard from '../../components/product-card/ProductCard';
import './MainCategory.scss';

const MainCategory = () => {
  const { categoryname } = useParams();
  const [mainCategoryData, setMainCategoryData] = useState(null);

  useEffect(() => {
    instance(`/category/categories/${categoryname}`)
      .then(response => setMainCategoryData(response.data))
      .catch(err => console.log(err));
  }, [categoryname])
  return (
    <div className="container">
      <div>
        <div className="category-wrapper">
          <h2>{localStorage.getItem("lang") === "uz" ? mainCategoryData?.maincategoryTranslate.uz : mainCategoryData?.maincategoryTranslate.ru}</h2>
          <div className='wrapper-grid'>
            {
              mainCategoryData?.maincategory.map(categoryProductItem =>
                <ProductCard productData={categoryProductItem} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCategory