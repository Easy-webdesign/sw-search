import React from 'react';
import './index.scss';

const Spinner = p => {
    return(
        <div className="spinner-border text-light" style={{width: 4+'rem', height: 4+'rem'}} role="status">
            <span className="visually-hidden"></span>
        </div>
    );
};

export default Spinner;