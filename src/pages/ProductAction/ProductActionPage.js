import React, { useState } from 'react';

import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'

const ProductActionPage = () => {
    const [name, setname] = useState("");
    const [price, setprice] = useState();
    const [status, setstatus] = useState(false);
    const onChange = (e) => {
        switch (e.target.name) {
            case "name":
                setname(e.target.value);
                break
            case "price":
                var p = parseInt(e.target.value);
                setprice(p);
                break
            case "status":
                setstatus(e.target.checked)
                break
            default:
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(typeof price);
        callAPI.mockAPI(constAPI.PRODUCT_LIST, 'POST', {
            name: name,
            price: price,
            status: status
        }).then(res => {
            console.log(res);
        })
    }
    return (
        <div className='col-6'>
            <h3 className='h3'>Thêm sản phẩm mới</h3>
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
                            <input type="checkbox" className="form-check-input " value={status} name='status' onChange={onChange} />
                            Còn hàng
                        </label>
                    </div>
                </div>
                <button type='submit' className="btn-light mt-4">Lưu lại</button>
            </form>
        </div>
    );
}

export default ProductActionPage;
