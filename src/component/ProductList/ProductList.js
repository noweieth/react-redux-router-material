import React from 'react';

const ProductList = (props) => {
    return (
        <div className="card">
            <div className="card-header bg-light">
                <h3>Quản Lí Sản Phẩm</h3>
            </div>
            <div className="card-body p-0">
                <table className="table table-hover bg-light text-secondary">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>MÃ</th>
                            <th>TÊN</th>
                            <th>GIÁ</th>
                            <th>TRẠNG THÁI</th>
                            <th>HÀNH ĐỘNG</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ProductList;
