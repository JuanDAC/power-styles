
/**
 * varAdding:: string -> string
 */
export const varAdding = (value) =>
    typeof value === "string" && value.startsWith("--")
        ? `var(${value})`
        : value;

/**
 * toStringValues:: string -> string
 */
export const toStringValues = (value) =>
    value instanceof CSSUnitValue
        ? value
        : String(value);

/**
 * compouseHandlers:: identity -> identity
 */
export const compouseHandlers = (handlers) => {
    if (Array.isArray(handlers)) {
        return (valueRaw) => (handlers).reduceRight(
            (value, handler) => handler(value)
            , valueRaw
        );
    }

    if (handlers instanceof Function) {
        return handlers;
    }

    return (valueOut) => valueOut;
};