import SWServices from "./sw-main";

export class SWApi extends SWServices{
    constructor(){
        super();
        this.req = ['people', 'planets', 'starships'];
        this.results = [];
    }


    getAllItems = async() => {
        const arr = this.req.map( async str => {
            const res = await this.getApi(str);
            return res.results.map(this[this.method(str)])
        })
        const pr = await Promise.all([...arr]);
        pr.forEach(el => {
            this.results.push(...el)
        })
        if(this.results.length) return this.results;
    }

    method = (str) => {
        return `_transform${str[0].toUpperCase() + str.slice(1)}`;
    }
}