import { stylePropertyFactory } from "./core";
import { varAdding } from "./handers";
import uppercamelcase from "uppercamelcase";
import { paramCase } from "param-case";
import getCustomProperties from "get-custom-properties";

String.prototype.addPrefixCustom = function() {
  if (this.startsWith("--")) {
    return `custom${this}`;
  }
  return this;
}

export const styleActions = Object.fromEntries(
  Object.keys(document.body.style)
    .concat(getCustomProperties("power-styles"))
    .map((property) => [
      uppercamelcase(property.addPrefixCustom()),
      stylePropertyFactory(property.startsWith("--") ? property : paramCase(property), varAdding)
    ]) // Object.keys(document.body.style).map(key => [
); // Object.fromEntries
