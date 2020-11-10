import React from 'react';
import { NavLink } from 'react-router-dom';



const Menu = () => {
    const menus = [
        {
            to: '/',
            exact: true,
            label: 'Trang Chủ'
        }, {
            to: '/product-list',
            exact: false,
            label: 'Danh Sách Sản phẩm'
        },
    ]
    const Navlink = (menus) => {
        var result = null
        result = menus.map((menu, index) => {
            return (
                <li className="nav-item" key={index}>
                    <NavLink to={menu.to} exact={menu.exact} activeClassName='active' className="nav-link">{menu.label}</NavLink>
                </li>
            )
        })
        return result
    }
    return (
        <ul className="nav nav-tabs mt-4" id="navId">
            <li className="nav-item ml-5">
                <a href="#1" className="nav-link disabled">Call API</a>
            </li>
            {Navlink(menus)}
        </ul>
    );
}

export default Menu;
