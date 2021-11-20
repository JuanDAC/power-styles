import { isFirefox } from "./validators"
import { getCustomProperties, getCustomPropertiesRegisted } from "get-custom-properties";

/**
 * getStyleDeclaration:: void -> [string]
 */
export const getStyleDeclaration = () => isFirefox()
    ? Object.keys(Object.getPrototypeOf(document.body.style))
    : Object.keys(document.body.style);

/**
 * getCustoms:: void -> [string]
 */
export const getCustoms = () => {
    const currentCustoms = getCustomProperties("power-styles")
        .concat(getCustomPropertiesRegisted("#power-styles")
            .map(({ name }) => name));

    return currentCustoms.filter((value, index) => currentCustoms.indexOf(value) === index);
}
