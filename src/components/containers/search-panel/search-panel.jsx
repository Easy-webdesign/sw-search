import React, { useContext } from 'react';
import { withContext } from '../../hoc';
import { Button, Search } from '../../UI';
import { List } from '../result-list';
import './index.scss';

const SearchPanel = p => {
    return(
        <div className='search-panel'>
            <input 
                className="form-control" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Type to search..."
                onChange={e => p.apiSearch(e.target.value)}
            />
            <List/>
        </div>
    );
};

export default withContext(SearchPanel);