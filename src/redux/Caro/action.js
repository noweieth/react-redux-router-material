import * as constAPI from '../../contants/CONST_API'
import * as callAPI from '../../utils/mockAPI'
import { pushData, fetchData, deleteData } from '../../utils/firebase'


export const CaroActionTypes = {
    CHECK_CELL: 'CHECK_CELL'
};

export const check_cell = (id) => {
    return {
        type: CaroActionTypes.CHECK_CELL,
        id
    }
}
