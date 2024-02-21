import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
    const { dispatch, Location } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{Location}{props.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={() => increaseAllocation(props.name)} /></td>
            <td><FaMinusCircle size='2.2em' color="red" onClick={() => decreaseAllocation(props.name)} /></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;
