import React from 'react';
import './Main.scss';
import { useEffect, useState } from 'react';
// import { instance } from '../../api/axios';
import axios from 'axios';

const Main = () => {
    const [homeReeldata, setHomeReeldata] = useState([]);

    useEffect(() => {
        axios("https://tame-hen-baseball-cap.cyclic.app/product/all")
            .then(response => setHomeReeldata(response.data))
            .catch(err => console.log(err))
    }, [])
    console.log(homeReeldata);

  return (
    <div>
        {
         homeReeldata?.allproducts?.slice(0, 4).map(product =>
            <h2>{product.name}</h2>
         )
        }
    </div>
  )
}

export default Main