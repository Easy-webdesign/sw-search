import {SWApi} from "./sw-api"

export class SWTransform extends SWApi{
    constructor(){
        super();
        this.imgUrl = 'https://starwars-visualguide.com/assets/img/';
    }

    _getId = ({url}) => {
        const reg = /\/([0-9]*)\/$/;
        return url.match(reg)[1]
    }

    _getFilm = async url => {
        const res = await fetch(url);
        return res.json();
    }

    _renderFilms = ({films}) => {
        const arr = [];
        films.forEach(el => {
            this._getFilm(el).then(el => arr.push(el.title))
        })

        return arr;
    }

    _transformPeople = el => {
        const id = this._getId(el);
        return {
            id: 'sw-' + Math.random(),
            name: el.name,
            type: 'person',
            eyeColor: el.eye_color,
            gender: el.gender,
            hairColor: el.hair_color,
            height: el.height,
            gender: el.gender,
            mass: el.mass,
            films: this._renderFilms(el),
            img: this.personImageUrl(id),
        };
    }

    _transformPlanets = el => {
        const id = this._getId(el);

        return {
            id: 'sw-' + Math.random(),
            name: el.name,
            type: 'planet',
            diameter: el.diameter,
            population: el.population,
            rotationPeriod: el.rotation_period,
            climate: el.climate,
            terrain: el.terrain,
            films: this._renderFilms(el),
            img: this.planetImageUrl(id),
        }
    }

    _transformStarships = el => {
        const id = this._getId(el);

        return {
            id: 'sw-' + Math.random(),
            name: el.name,
            type: 'starship',
            cost: el.cost_in_credits,
            rating: el.hyperdrive_rating,
            model: el.model,
            passengers: el.passengers,
            class: el.starship_class,
            films: this._renderFilms(el),
            img: this.planetImageUrl(id)
        }
    }

    personImageUrl = id => `${this.imgUrl}characters/${id}.jpg`
    planetImageUrl = id => `${this.imgUrl}planets/${id}.jpg`
    starshipImageUrl = id => `${this.imgUrl}starships/${id}.jpg`
}