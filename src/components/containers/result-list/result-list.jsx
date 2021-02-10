import React from 'react';
import { withContext } from '../../hoc';
import { Result } from '../../UI';
import Descr from '../descr/descr';
import './index.scss';
import utils from './utils';

const renderResults = (arr) => {
    return arr.map(el => {
        return (
                <Result key={el.id} id={el.id}>
                {utils[el.type].map((d, i) => {
                     return <Descr key={i} item={el} {...d}/> }
                )}
            </Result>
        )
    })
}

const List = p => {
    return(
            p.searchList === '' ? null :
            Array.isArray(p.searchList) && !p.searchList.length ?
            <ul className='result-list'>
                <h5>По вашему запросу ничего не найдено</h5>
            </ul>
            : <ul className='result-list'>
                {renderResults(p.searchList)}
            </ul>
        
    );
};

export default withContext(List)