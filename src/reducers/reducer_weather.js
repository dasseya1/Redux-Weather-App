import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER: 
            //return state.concat([action.payload.data]); ***ES6 syntax to write the same code below***
            return [action.payload.data, ...state]; // [city, city, city]
    }
    return state;
}