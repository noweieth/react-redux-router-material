import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'
import { pushData, fetchData, deleteData } from '../../utils/firebase'


export const productActionTypes = {
    FETCH_PRODUCT: 'FETCH_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT'
};

export const Fetch_product_api = (products) => {

    return (dispatch) => {
        fetchData().then(res => dispatch(Fetch_product(res)))
        // return callAPI.mockAPI(constAPI.PRODUCT_LIST, 'GET', null).then(res => {
        //     dispatch(Fetch_product(res.data))
        // })
    }
}

export const Fetch_product = (products) => {
    return {
        type: productActionTypes.FETCH_PRODUCT,
        products
    }
}

export const Delete_product_api = (id) => {
    return (dispatch) => {
        deleteData(id)
        dispatch(Delete_product(id))
        // }
        // return (dispatch) => {
        //     return callAPI.mockAPI(`${constAPI.PRODUCT_LIST}/${id}`, 'DELETE', null).then(res => {
        //         dispatch(Delete_product(res.data.id))
        //     })
        // }
    }
}

export const Delete_product = (id) => {
    return {
        type: productActionTypes.DELETE_PRODUCT,
        id
    }
}
export const Add_product_api = (product) => {
    return (dispatch) => {
        pushData({//push into firebase
            id: '',
            name: product.name,
            price: product.price,
            status: product.status
        })
        dispatch(Add_product({//add vao store redux
            id: product.id,
            name: product.name,
            price: product.price,
            status: product.status
        }))
    }
    // return (dispatch) => {
    //     return callAPI.mockAPI(constAPI.PRODUCT_LIST, 'POST', {
    //         name: product.name,
    //         price: product.price,
    //         status: product.status
    //     }).then(res => {
    //         dispatch(Add_product(res.data))
    //     })
    // }

}

export const Add_product = (product) => {
    return {
        type: productActionTypes.ADD_PRODUCT,
        product
    }
}
export const Edit_product_api = (product) => {
    return (dispatch) => {
        pushData({//push into firebase
            id: product.id,
            name: product.name,
            price: product.price,
            status: product.status
        })
        dispatch(Edit_product({//edit store redux
            id: product.id,
            name: product.name,
            price: product.price,
            status: product.status
        }))
    }
    // return (dispatch) => {
    //     return callAPI.mockAPI(`${constAPI.PRODUCT_LIST}/${product.id}`, 'PUT', {
    //         name: product.name,
    //         price: product.price,
    //         status: product.status
    //     }).then(res => {
    //         dispatch(Edit_product(product))
    //     })
    // }

}

export const Edit_product = (product) => {
    return {
        type: productActionTypes.UPDATE_PRODUCT,
        product
    }
}