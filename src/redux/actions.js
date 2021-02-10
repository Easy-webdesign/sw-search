import { SWTransform } from "../services/sw-transform";

const Actions = (state, dis) => {
    return class extends SWTransform{
        apiItems = () => {
            this.getAllItems()
                .then(payload => {
                    dis({type: 'GET_ITEMS', payload})
                })
            
        }
        apiDetails = (id) => {
            const cand = state.items.find(el => el.id === id);
            console.log(cand);
            dis({type: 'RENDER_DETAILS', payload: cand})
        }
        apiSearch = (value) => {
            if(!state.items.length) return;

            const reg = new RegExp(`${value}`, 'gi')
            
            const payload = state.items.filter(el => {
                return (value ? el.name.match(reg) : '')
            })
            
            dis({type: 'RENDER_SEARCH_LIST', payload: payload.length ? payload : ''})
        }
        apiLoading = () => {}
        apiError = () => {}
    }
}



export default function(state, dis){
    const Act = Actions(state, dis);
    return Object.entries(new Act())
                .filter(arr => arr[0].startsWith('api'))
                .reduce((acc, el) => {
                    acc[el[0]] = el[1]
                    return acc;
                }, {})
}