import browserPolyfill from "css-typed-om"

const isBrowser = new Function(`
    try {
        return this===window;
    } catch {
        return false;
    }
`);

const getGolbal = new Function(`
    try {
        if (isBrowser()) {
            return window;
        }
        return global;
    } catch {
        return this;
    }
`);


export const polyfill = () => {
    if (!isBrowser()) {
        if (!getGolbal().CSSRule) getGolbal().CSSRule = class CSSRule { };
        if (!getGolbal().Element) getGolbal().Element= class Element { };
    }
    browserPolyfill(getGolbal());
    return {};
}