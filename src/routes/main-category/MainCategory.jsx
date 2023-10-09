import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { instance } from '../../api/axios';
import ProductCard from '../../components/product-card/ProductCard';
import './MainCategory.scss';
import { useSelector } from 'react-redux';

const MainCategory = () => {
  const currentLng = useSelector(state => state.language.lang);
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
          <h2>{currentLng === "uz" ? mainCategoryData?.maincategoryTranslate.uz : mainCategoryData?.maincategoryTranslate.ru}</h2>
          <div className='wrapper-grid'>
            {
              mainCategoryData?.maincategory.map((categoryProductItem, i) =>
                <ProductCard key={i} productData={categoryProductItem} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCategory