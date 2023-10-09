import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Partners from './partners/Partners';
import Login from './login/Login';
import Admin from './admin/Admin';
import MainCategory from './main-category/MainCategory';
import ProductView from './product-view/ProductView';
import SubCategory from './subcategory/SubCategory';
import Private from './private/Private';


const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Private/>}>
                <Route path='/admin' element={<Admin />}/>
            </Route>
            <Route path='/mainCategory/:categoryname' element={<MainCategory />} />
            <Route path='/subcategory/:subcategoryname' element={<SubCategory />} />
            <Route path='/product-view/:id' element={<ProductView />} />
        </Routes>
    )
}

export default AllRoutes