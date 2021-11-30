import { stylesActions } from '../application/singeltonActions'
import { polyfill } from './polyfill';

let previousPlataform;

export const init = (plataform) => {

    polyfill();

    if (plataform) {
        previousPlataform = plataform;
    }

    return stylesActions;
}

