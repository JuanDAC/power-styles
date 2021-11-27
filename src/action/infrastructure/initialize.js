import { stylesActions } from '../application/singeltonActions'
import polyfill from "css-typed-om"

const isBrowser = new Function(`
    try {
        return this===window;
    }catch(e){
        return false;
    }
`);

const getWindow = new Function(`
    return window;
`);

let previousPlataform;

export const init = (plataform) => {

    if (isBrowser()) {
        polyfill(getWindow());
    }

    if (plataform) {
        previousPlataform = plataform;
    }

    return stylesActions;
}

