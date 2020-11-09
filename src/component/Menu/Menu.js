import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <ul className="nav nav-tabs m-3" id="navId">
            <li className="nav-item">
                <a href="#1" className="nav-link disabled">Call API</a>
            </li>
            <li className="nav-item">
                <NavLink to='/' exact activeClassName='active' className="nav-link">Trang Chủ</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to='/product-list' activeClassName='active' className="nav-link">Danh Sách Sản phẩm</NavLink>
            </li>
        </ul>
    );
}

export default Menu;
