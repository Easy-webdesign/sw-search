import React from 'react';
import { withContext } from '../../hoc';
import './index.scss';
import utils from './utils';

const Details = p => {
    if(!p.details) return <div className="null-title">Details not found</div>

    const {img, name, type} = p.details;
    
    return(
        <div className='item-details'>
            <div className="item-details-img">
                <img src={img} alt=""/>
            </div>
            <div className="item-details-content">
                <h2>{name}</h2>
                <h4>Characters</h4>
                <ul>
                    {
                        utils[type].map(({label, value}, i) => {
                            return value === 'films' ? <li key={i}>{label}: {p.details[value].join(', ')}.</li>
                            : <li key={i}>{label}: {p.details[value]}</li>
                        })
                    }
                    
                    <li>Eye color: blue</li>
                </ul>
            </div>
        </div>
    );
};

export default withContext(Details)