import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'
import ProductList from '../../component/ProductList/ProductList'
import ProductItem from '../../component/ProductItem/ProductItem'

const ProductListPage = (props) => {
    const [product, setproduct] = useState(props.products)
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
    useEffect(() => {
        callAPI.mockAPI(constAPI.PRODUCT_LIST, 'GET', null).then(res => {
            setproduct(res.data)
        })
    }, [])


    return (
        <div className="row mt-5">
            <div className="col-12 mb-3">
                <NavLink to='product/add' activeClassName='active' className="btn btn-primary float-left">Thêm sản phẩm</NavLink>
            </div>
            <div className="col-lg-12">
                <ProductList>
                    {showProduct(product)}
                </ProductList >
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.productReducer
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
