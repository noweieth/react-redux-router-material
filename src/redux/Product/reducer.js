import { productActionTypes } from './action'
var initialState = []

const productReucer = (state = initialState, action) => {
    switch (action.type) {
        case productActionTypes.ADD_PRODUCT:

        case productActionTypes.DELETE_PRODUCT:
            var products = [...state];
            products.forEach((prd, index) => {
                if (prd.id === action.id) {
                    products.splice(index, 1);
                }
            })
            state = [...products]
            return [...state]
        case productActionTypes.FETCH_PRODUCT:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default productReucer;