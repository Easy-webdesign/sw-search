import React from 'react';
import { withContext } from '../../hoc';
import './index.scss';

const Result = p => {
    const {name} = p.children[0].props.item;

    return(
        <li className='result' onClick={e => p.apiDetails(p.id)}>
            <div className="result-name">{name}</div>
            <div className="result-params">
                {p.children}
            </div>
        </li>
    );
};

export default withContext(Result)