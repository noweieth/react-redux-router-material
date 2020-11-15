import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import ProductList from '../../component/ProductList/ProductList'
import ProductItem from '../../component/ProductItem/ProductItem'
import { Fetch_product_api, Delete_product_api } from '../../redux/Product/action'

const ProductListPage = (props) => {
    const [product, setproduct] = useState([])
    useEffect(() => {
        props.fetchAllProdcuts()
        setproduct([...props.products])
    }, []);
    useEffect(() => {
        console.log('calll API');
        const interval = setInterval(() => {
            props.fetchAllProdcuts()
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const onDelete = (id) => {
        console.log(id);
        props.deleteProduct(id)
    }
    const showProduct = (products) => {
        var result = null
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={onDelete}
                    />
                )
            })
        }
        return result
    }


    return (
        <div className="row mt-5">
            <div className="col-12 mb-3">
                <NavLink to='product/add' activeClassName='active' className="btn btn-primary float-left">Thêm sản phẩm</NavLink>
            </div>
            <div className="col-lg-12">
                <ProductList>
                    {showProduct(props.products)}
                </ProductList >
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        products: state.productReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProdcuts: () => {
            dispatch(Fetch_product_api())
        },
        deleteProduct: (id) => {
            dispatch(Delete_product_api(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage)
