

export default class SWServices{
    constructor(){
        this.url = 'https://swapi.dev/api/'
    }

    getApi = async (url = '') => {
        const res = await fetch(this.url+url);
        if(!res.ok) throw new Error('Что то пошло не так...');
        else return res.json();
    }
}

const sw = new SWServices();

// sw.getAllItems('planets')
//     .then(res => console.log(res));

