import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductItem = (props) => {
    var { product, index } = props;
    const onDelete = (id) => {
        props.onDelete(id);
    }
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
                <NavLink to={`product/${product.id}/edit`} className="btn btn-outline-primary mr-1"><i className="fas fa-edit"></i></NavLink>
                <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(product.id)}><i className="fas fa-trash" ></i></button>
            </td>
        </tr>
    );
}

export default ProductItem;
