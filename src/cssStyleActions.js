import { stylePropertyFactory } from "./core";
import { varAdding } from "./handers";
import uppercamelcase from "uppercamelcase";

export const styleActions = Object.fromEntries(
  Object.keys(document.body.style).map((property) => [
    uppercamelcase(property),
    stylePropertyFactory(property, varAdding)
  ]) // Object.keys(document.body.style).map(key => [
); // Object.fromEntries
