import React from 'react';
import './Spinner.css';

function Spinner() {
  return <div>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
}

export default Spinner