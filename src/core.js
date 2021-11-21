import polyfill from "css-typed-om"
import { compouseHandlers } from "./handers"
import { isInvalidValue } from "./validators"

polyfill(window);

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

    return someAction;
  };

  return currentAction;
};

// TODO: read property transltate from node and animate cumtomproperties
 
/** 
 * styleActionFactory:: (string,  identity) -> currentAction
 */
export const customActionFactory = (property, handlers) => {
  const handler = compouseHandlers(handlers);

  /**
   * currentAction:: (node, string) -> {update: string -> currenAction}
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

    return someAction;
  };

  return currentAction;
};
