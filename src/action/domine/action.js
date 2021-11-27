import { compouseHandlers } from "../application/handers"
import { isInvalidValue } from "./validators"

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
        node?.attributeStyleMap?.set(property, value.toString());

        const propertyValue = node?.style?.getPropertyValue(property) || '';

        if (propertyValue.trim() !== value.toString().trim()) {
            node?.style?.setProperty(property, value.toString());
        }

        return someAction;
    };
    return currentAction;
};
