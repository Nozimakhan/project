import React from 'react';
import './Main.scss';
import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ProductCraousel from '../product-carousel/ProductCraousel';

const Main = () => {
  const [homeReeldata, setHomeReeldata] = useState([]);

  useEffect(() => {
    axios("https://mold-components.onrender.com/category/category-reel")
      .then(response => setHomeReeldata(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container">
      <div className='home__product-carousel'>
        {
          homeReeldata.slice(0, 4).map(category =>
            <Fragment key={uuidv4()}>
              <h2>{localStorage.getItem("lang") === "uz" ? category.categoryName_uz : category.categoryName_ru}</h2>
              <ProductCraousel categoryData={category} />
            </Fragment>
          )
        }
      </div>
    </div>
  )
}

export default Main