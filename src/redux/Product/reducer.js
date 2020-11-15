import { productActionTypes } from './action'
var initialState = []

const productReucer = (state = initialState, action) => {
    switch (action.type) {
        case productActionTypes.UPDATE_PRODUCT:
            var products = [...state];
            let ind;
            products.forEach((product, index) => {
                if (product.id === action.product.id) {
                    ind = index
                }
            })
            products[ind] = {
                ...products[ind],
                name: action.product.name,
                price: action.product.price,
                status: action.product.status
            }
            state = [...products]
            return [...state]
        case productActionTypes.ADD_PRODUCT:
            var products = [...state];
            products.push(action.product)
            state = [...products]
            return [...state]
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