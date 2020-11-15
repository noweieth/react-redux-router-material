import React from 'react';
import Cell from '../Cells/Cell';

const Fiel = (props) => {
    var { WIDTH, ID } = props;
    var cells = [WIDTH];
    for (var i = 0; i < WIDTH; i++) {
        cells[i] = <Cell key={i} ID={`${ID}${i}`}></Cell>
    }
    return (
        <tr>
            {cells}
        </tr>
    );
}

export default Fiel;
