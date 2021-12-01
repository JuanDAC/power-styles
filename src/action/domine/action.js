import { compouseHandlers } from "../application/handers"
import { isInvalidValue } from "./validators"

/**
 * setProperty:: (HTMLElement, string, string) -> void
 */
export const setProperty = (node, property, value) => {
    if (node && node['attributeStyleMap'] && node['attributeStyleMap']['set'] instanceof Function) {
        node.attributeStyleMap.set(property, value);
    }
    node?.style?.setProperty(property, value);
}

/**
 * styleActionFactory:: (string,  identity) -> currentAction
 */
export const styleActionFactory = (property, handlers) => {
    const handler = compouseHandlers(handlers);
    /**
     * currenAction:: (node, string) -> {update: string -> currenAction}
     */
    const currentAction = (node, valueRaw) => {
        const value = handler(valueRaw);
        const someAction = {
            update: (valueRaw) => currentAction(node, valueRaw)
        };

        if (isInvalidValue(value)) {
            return someAction;
        }

        // update style
        setProperty(node, property, value.toString());

        return someAction;
    };
    return currentAction;
};
