import React from 'react'
import ProductListPage from '../pages/ProductList/ProductListPage';
import ProductActionPage from '../pages/ProductAction/ProductActionPage';
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
    }, {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    }, {
        path: '/product/:id/edit',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },
]

export default routes;