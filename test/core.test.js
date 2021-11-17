import { isValidValue } from "../src/core";
import { valuesToTest } from "./data"

valuesToTest.forEach(([value, toExpect]) => {
    test(`[CORE]
    isValidValue: String -> Bool 
    isValidValue: ${JSON.stringify(value)} -> ${JSON.stringify(toExpect)}
    `, () => {
        expect(isValidValue('')).toBe(false);
    });
})

test(`[CORE]
    isValidValue: String -> Bool 
    isValidValue:   -> false
    `, () => {
    expect(isValidValue()).toBe(false);
});


import Text from '../example/src/Text.svelte'
import { render, fireEvent } from '@testing-library/svelte'

it('it works', async () => {
  const  text = 'hola';
  const { getByText } = render(Text, {
    text,
  })

  const textRender = getByText(text)

  await fireEvent.click(textRender)

  expect(textRender.textContent).toBe(text)

})