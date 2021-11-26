import { isFirefox } from "./validators"

/**
 * getStyleDeclaration:: void -> [string]
 */
export const getStyleDeclaration = () => STYLE_DECLARATIONS;

/**
 * getCustoms:: void -> [string]
export const getCustoms = () => {
    const currentCustoms = getCustomProperties("power-styles")
        .concat(getCustomPropertiesRegisted("#power-styles")
            .map(({ name }) => name));

    return currentCustoms.filter((value, index) => currentCustoms.indexOf(value) === index);
}
 */