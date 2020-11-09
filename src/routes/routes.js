import React from 'react'
import ProductListPage from '../pages/ProductList/ProductListPage';
import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    }, {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },

]

export default routes;