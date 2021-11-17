export const isValidValue = (value = "") =>
  ["", "false", "null", "undefined"].every((compare) => value != compare);

export const isInvalidValue = (value) => !isValidValue(value);

export const updateStyle = (node, property, value) => {
  if (isValidValue(value)) {
    node.style.setProperty(property, value);
  }
};

export const getHandler = (handlers) => {
  if (Array.isArray(handlers)) {
    return (valueOut) =>
      [valueOut, ...(handlers || [])].reduce((valueIn, handler) =>
        handler(valueIn)
      );
  } else if (handlers instanceof Function) {
    return handlers;
  }

  return (valueOut) => valueOut;
};

export const stylePropertyFactory = (property, handlers = false) => {
  const handler = getHandler(handlers);

  const currentAction = (node, valueOut) => {
    const valueIn = handler(valueOut);

    if (
      valueIn === false ||
      valueIn === null ||
      valueIn === undefined ||
      (typeof valueIn === "string" && isInvalidValue(valueIn))
    ) {
      return {
        update: (valueOut) => currentAction(node, valueOut)
      };
    }

    updateStyle(node, property, String(valueIn));
    return {
      update: (valueOut) => currentAction(node, valueOut)
    };
  };

  return currentAction;
};

