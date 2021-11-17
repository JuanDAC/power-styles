import { stylePropertyFactory } from "./core";
import { varAdding } from "./handers";
import uppercamelcase from "uppercamelcase";
import { paramCase } from "param-case";


export const styleActions = Object.fromEntries(
  Object.keys(document.body.style).map((property) => [
    uppercamelcase(property),
    stylePropertyFactory(paramCase(property), varAdding)
  ]) // Object.keys(document.body.style).map(key => [
); // Object.fromEntries
