
export const varAdding = (value) =>
    typeof value === "string" && value.startsWith("--") 
    ? `var(${value})` 
    : value;
