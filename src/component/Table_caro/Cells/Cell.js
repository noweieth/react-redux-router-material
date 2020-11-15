import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import * as action_caro from '../../../redux/Caro/action'

const Cell = (props) => {
    var { ID, table } = props
    const [status, setstatus] = useState('');
    const onCheck = () => {
        props.check_cell(ID)
        setstatus('player1')
    }
    useEffect(() => {
        table.forEach((cell, index) => {
            if (cell.ID === ID) {
                setstatus(cell.STATUS)
            }
        })
    }, [])

    return (
        <td onClick={onCheck}>
            {status === 'player1' ?
                <i className="fa fa-times" aria-hidden="true"></i> : ''}
            {status === 'player2' ?
                <i className="far fa-circle" aria-hidden="true"></i> : ''}
        </td>
    );
}
const mapStateToProps = (state) => {
    return {
        table: state.caroReducer.TABLE_CARO
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        check_cell: (id) => {
            dispatch(action_caro.check_cell(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell)
