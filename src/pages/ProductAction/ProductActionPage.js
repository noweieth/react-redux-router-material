import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'

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
            callAPI.mockAPI(constAPI.PRODUCT_LIST, 'POST', {
                name: name,
                price: price,
                status: status
            }).then(res => {
                console.log(res);
                history.goBack()
            })
        } else {
            callAPI.mockAPI(`${constAPI.PRODUCT_LIST}/${idProductEdit}`, 'PUT', {
                name: name,
                price: price,
                status: status
            }).then(res => {
                console.log(res);
                history.goBack()
            })
        }

    }

    useEffect(() => {
        var { match } = props
        if (match) {
            setidProductEdit(match.params.id)
            callAPI.mockAPI(`${constAPI.PRODUCT_LIST}/${match.params.id}`, 'GET', null).then(res => {
                setname(res.data.name)
                setprice(res.data.price)
                setstatus(res.data.status)
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

export default ProductActionPage;
