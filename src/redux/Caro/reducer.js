import { CaroActionTypes } from './action'

var initialState = {
    WIDTH: 10,
    TABLE_CARO: []
}
for (var i = 0; i < initialState.WIDTH; i++) {
    for (var j = 0; j < initialState.WIDTH; j++) {
        initialState.TABLE_CARO.push({
            ID: `${i}${j}`,
            STATUS: 'disable'
        })
    }
}

const caroReducer = (state = initialState, action) => {
    switch (action.type) {
        case CaroActionTypes.CHECK_CELL:
            var table = state.TABLE_CARO
            table.forEach((cell, index) => {
                if (cell.ID === action.id) {
                    if (cell.STATUS === 'disable') {
                        table[index] = { ...table[index], STATUS: 'player1' }
                        return { ...table[index] }
                    }
                }
            })
            return { ...state }
        default:
            return { ...state }
    }
}

export default caroReducer;