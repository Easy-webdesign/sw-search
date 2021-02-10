import React, {Component, useContext} from 'react';
import { Details, List, Result, SearchPanel, withContext } from '../components';
import { Context } from '../components/context';
import { Spinner } from '../components/hoc-helpers';
import './index.scss';

class App extends Component {
    componentDidMount = () => {
        this.props.apiItems();
    }
    render(){
        if(this.props.loading) return <Spinner/>
        return(
            <div className='app'>
                <h2 className="bg-title">SWAPI</h2>
                <SearchPanel/>
                <Details/>
                {/* <List/> */}
            </div>
        );
    };
};


export default withContext(App);