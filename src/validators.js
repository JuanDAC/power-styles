
/**
 * isFirefox:: void -> bool
export const isFirefox = () => !!navigator.userAgent.match(/Firefox/);
 */

/**
 * isValidValue:: string | CSSUnitValue -> boolean
 */
export const isValidValue = (value) => {
  if (value instanceof CSSUnitValue) {
    return true;
  }

  if (typeof value == "string"
    && ["", "false", "null", "undefined"].every((compare) => value != compare)) {
    return true;
  }

  return false;
}

/**
 * isInvalidValue:: string | CSSUnitValue -> boolean
 */
export const isInvalidValue = (value) => !isValidValue(value);
