import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import { ErrorBoundary } from './components';
import { Context, SWProvider } from './components/context';
import './index.scss';
import actions from './redux/actions';
import { SwState } from './redux/reducer';
import './services/sw-transform';



ReactDOM.render(
    <ErrorBoundary>
        <SwState>
            <App/>
        </SwState>
    </ErrorBoundary>,
    document.getElementById('root'));