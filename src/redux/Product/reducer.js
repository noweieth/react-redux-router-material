import { productActionTypes } from './action'
var initialState = [{
    id: '123',
    name: 'SamSung',
    price: 10000,
    status: false
},
{
    id: '123',
    name: 'Apple',
    price: 10000,
    status: true
}]

const productReucer = (state = initialState, action) => {
    switch (action.type) {
        case productActionTypes.EXPORT:
            return
        default:
            return [...state]
    }
}

export default productReucer;