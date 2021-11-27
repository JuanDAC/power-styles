import { styleActionFactory } from "../domine/action"
import { varAdding, toStringValues } from "./handers"
// import uppercamelcase from "uppercamelcase";
import { paramCase } from "param-case";

export const stylesActions = new Proxy({}, {
    get: (obj, key) => {
        if (obj.hasOwnProperty(key)) {
            return obj[key];
        }

        const propertyName = paramCase(key).replace(/^custom-/, "--");
        obj[key] = styleActionFactory(propertyName, [varAdding, toStringValues]);

        return obj[key];
    }
});