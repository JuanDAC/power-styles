export const isValidValue = (value = "") =>
  ["", "false", "null", "undefined"].every((compare) => value != compare);

export const isInvalidValue = (value) => !isValidValue(value);

export const updateStyle = (node, property, value, unit) => {
  if (isValidValue(value)) {
    node.style.setProperty(property, `${value}${unit}`);
  }
};

export const isUnit = (valueIn) => {
  if (Array.isArray(valueIn)) {
    return valueIn
  }
  return [valueIn, false]
}

export const getHandler = (handlers) => {
  if (Array.isArray(handlers)) {
    return (valueOut) =>
      [valueOut, ...(handlers || []), isUnit].reduce((valueIn, handler) =>
        handler(valueIn)
      );
  } else if (handlers instanceof Function) {
    return (valueOut) => isUnit(handlers(valueOut));
  }

  return (valueOut) => isUnit(valueOut);
};

export const stylePropertyFactory = (property, handlers = false) => {
  const handler = getHandler(handlers);
  let unit = '';

  const currentAction = (node, valueOut) => {
    const [valueIn, newUnit]= handler(valueOut);
    if (newUnit) {
      unit = newUnit;
    }

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

    updateStyle(node, property, String(valueIn), unit);
    return {
      update: (valueOut) => currentAction(node, valueOut)
    };
  };

  return currentAction;
};