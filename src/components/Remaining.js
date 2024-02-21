

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Remaining = () => {
    const { expenses, budget,Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining:<span className="eco" style={{ marginLeft: '0rem', marginRight: '0px'}}>{Location}</span>{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;