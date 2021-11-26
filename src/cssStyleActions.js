import { styleActionFactory } from "./core";
import { varAdding, toStringValues } from "./handers";
import uppercamelcase from "uppercamelcase";
import { paramCase } from "param-case";
import { extensionOnString } from "./extensions"
import { getStyleDeclaration } from "./getterProperties";

extensionOnString();

/**
 * getRegisterCustoms:: {string: currentAction}
 * .concat(getCustoms())
 */
export const styleActions = Object.fromEntries(
  getStyleDeclaration().map((property) => [
    uppercamelcase(property.addPrefixCustom()),
    styleActionFactory(
      property.startsWith("--")
        ? property
        : paramCase(property),
      [varAdding, toStringValues]
    ) // stylePropertyFactory(
  ]) // getStyleDeclaration().concat(getCustoms()).map((property) => [
); // export const styleActions = Object.fromEntries(