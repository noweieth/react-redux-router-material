import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

import { Add_product_api, Edit_product_api } from '../../redux/Product/action'

const ProductActionPage = (props) => {
    const [name, setname] = useState("");
    const [price, setprice] = useState(0);
    const [status, setstatus] = useState(false);
    const [idProductEdit, setidProductEdit] = useState("")
    const onChange = (e) => {
        switch (e.target.name) {
            case "name":
                setname(e.target.value);
                break
            case "price":
                if (e.target.value === "") {
                    setprice(0);
                } else {
                    let p = parseInt(e.target.value);
                    setprice(p);
                }
                break
            case "status":
                setstatus(e.target.checked)
                break
            default:
        }
    }
    var { history } = props
    const onSubmit = (e) => {
        e.preventDefault();
        if (idProductEdit === '') {
            props.addProduct({
                name: name,
                price: price,
                status: status
            })
            history.goBack()
        } else {
            props.editProduct({
                id: idProductEdit,
                name: name,
                price: price,
                status: status
            })
            history.goBack()
        }

    }

    useEffect(() => {
        var { match, products } = props
        if (match) {
            setidProductEdit(match.params.id)
            products.forEach((product, index) => {
                if (match.params.id === product.id) {
                    setname(product.name)
                    setprice(product.price)
                    setstatus(product.status)
                }
            })
        }
        return
    }, [])


    return (
        <div className='col-6'>
            <h3 className='h3'>{idProductEdit !== '' ? 'Sửa sản phẩm' : 'Thêm sản phẩm mới'}</h3>
            <form className='d-block' onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Tên sản phẩm" value={name} name='name' onChange={onChange} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Giá sản phẩm" value={price} name='price' onChange={onChange} />
                </div>
                <div className="form-group d-inline-block float-left">
                    <label className='float-left'>Trạng Thái:</label>
                    <div className="form-check">
                        <label className="form-check-label" id='checkboox'>
                            <input type="checkbox" className="form-check-input " name='status' onChange={onChange} checked={status} />
                            Còn hàng
                        </label>
                    </div>
                </div>
                <NavLink to="/product-list" className="btn btn-light mt-4 mr-4"><i className="far fa-arrow-alt-circle-left"></i> Trở về</NavLink>
                <button type='submit' className="btn btn-light mt-4">Lưu lại</button>
            </form>

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
        addProduct: (product) => {
            dispatch(Add_product_api(product))
        },
        editProduct: (product) => {
            console.log(product);
            dispatch(Edit_product_api(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage)
