import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_LOCATION',
      payload: val,
    });
  };

  return (
    
            <div className="dropdown">
<button className="btn" style={{ backgroundColor: "lightgreen", color: "white" }}>Currency (£ Pound)▼</button>
                <div className="dropdown-content">
                    <button onClick={() => changeLocation('$')}>$ Dollar</button>
                    <button onClick={() => changeLocation('£')}>£ Pound</button>
                    <button onClick={() => changeLocation('€')}>€ Euro</button>
                    <button onClick={() => changeLocation('₹')}>₹ Ruppee</button>
                </div>
            </div>
  );
};

export default Location;
