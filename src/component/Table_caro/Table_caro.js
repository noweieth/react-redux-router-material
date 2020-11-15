import React from 'react';
import Fiel from './Fiel/Fiel';
import './Table_caro.scss'
const WIDTH = 12;

const Table_caro = () => {
    var fiels = [WIDTH];
    for (var i = 0; i < WIDTH; i++) {
        fiels[i] = <Fiel key={i} ID={i} WIDTH={WIDTH}></Fiel>
    }
    return (
        <div className='body_table_caro'>
            <table>
                <tbody>
                    {fiels}
                </tbody>
            </table>
        </div>
    );
}

export default Table_caro;
