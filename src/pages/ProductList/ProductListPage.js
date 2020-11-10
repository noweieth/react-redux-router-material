import React from 'react';
import ProductList from '../../component/ProductList/ProductList'
import ProductItem from '../../component/ProductItem/ProductItem'

const ProductListPage = () => {
    const showProduct = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                    />
                )
            })
        }

        return result
    }
    var product = [
        {
            id: '123',
            name: 'SamSung',
            price: 10000,
            status: false
        },
        {
            id: '123',
            name: 'Apple',
            price: 10000,
            status: true
        }
    ]
    return (
        <div className="row mt-5">
            <div className="col-12 mb-3">
                <a name="" id="" className="btn btn-primary float-left" href="#1" role="button">Thêm sản phẩm</a>
            </div>
            <div className="col-lg-12">
                <ProductList>
                    {showProduct(product)}
                </ProductList >
            </div>
        </div>
    );
}

export default ProductListPage;
