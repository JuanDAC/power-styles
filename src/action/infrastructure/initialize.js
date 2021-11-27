import { switchPlataform } from './switchPlataform'
import polyfill from "css-typed-om"


let previousPlataform;

export const init = (plataform) => {
    if (!window) {
        return () => {};
    }

    if (window) {
        polyfill(window);
    }

    if (plataform) {
        previousPlataform = plataform;
    }

    return switchPlataform(previousPlataform);
}

