import { stylePropertyFactory } from './core';
import { varAdding } from './handers';
import upperCamelCase from 'uppercamelcase';

export const styleActions = Object.fromEntries(
    Object.keys(document.body.style).map(property => [
            upperCamelCase(property),
            stylePropertyFactory(property, varAdding),
        ]) // Object.keys(document.body.style).map(key => [
); // Object.fromEntries