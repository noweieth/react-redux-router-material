import React from 'react';

const ProductActionPage = () => {
    return (
        <div className='col-6'>
            <h3 className='h3'>Thêm sản phẩm mới</h3>
            <form className='d-block'>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Tên sản phẩm" aria-describedby="helpId" />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Giá sản phẩm" aria-describedby="helpId" />
                </div>
                <div className="form-group d-inline-block float-left">
                    <label className='float-left'>Trạng Thái:</label>
                    <div className="form-check">
                        <label className="form-check-label" id='checkboox'>
                            <input type="checkbox" className="form-check-input " value={false} />
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
