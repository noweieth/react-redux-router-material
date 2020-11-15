import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'

export const productActionTypes = {
    FETCH_PRODUCT: 'FETCH_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    UPDATE_PRODUCT: 'UPDATE_PRODUCT',
    DELETE_PRODUCT: 'DELETE_PRODUCT'
};

export const Fetch_product_api = (products) => {
    return (dispatch) => {
        return callAPI.mockAPI(constAPI.PRODUCT_LIST, 'GET', null).then(res => {
            dispatch(Fetch_product(res.data))
        })
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
        return callAPI.mockAPI(`${constAPI.PRODUCT_LIST}/${id}`, 'DELETE', null).then(res => {
            dispatch(Delete_product(res.data.id))
        })
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
        return callAPI.mockAPI(constAPI.PRODUCT_LIST, 'POST', {
            name: product.name,
            price: product.price,
            status: product.status
        }).then(res => {
            dispatch(Add_product(res.data))
        })
    }

}

export const Add_product = (product) => {
    return {
        type: productActionTypes.ADD_PRODUCT,
        product
    }
}