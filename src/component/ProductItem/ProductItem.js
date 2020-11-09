import React from 'react';

const ProductItem = (props) => {
    var { product, index } = props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={product.status ? "badge badge-success" : "badge badge-danger"}>
                    {product.status ? "Còn hàng" : "Hết hàng"}</span>
            </td>
            <td>
                <button type="button" className="btn btn-outline-primary mr-1"><i className="fas fa-edit"></i></button>
                <button type="button" className="btn btn-outline-danger"><i className="fas fa-trash"></i></button>
            </td>
        </tr>
    );
}

export default ProductItem;
