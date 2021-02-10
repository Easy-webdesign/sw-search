import { useReducer } from 'react';
import { SWProvider } from '../components/context';
import actions from './actions';
import {fn} from './utils';

export const SwState = ({children}) => {
    const initialState = {
        items: [],
        details: null,
        searchList: '',
        loading: true,
        error: false
    };
    
    const reducer = (state = initialState, action) => fn(state, action)[action.type] || state;

    const [state, dispatch] = useReducer(reducer, initialState);

    return <SWProvider value={{...state, ...actions(state, dispatch)}}>{children}</SWProvider>;
}

// export default reducer;