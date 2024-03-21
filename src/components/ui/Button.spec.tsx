import {test, expect} from '@playwright/experimental-ct-react';
import {Button} from './Button';
import React from 'react';

test('Button variant default', async ({mount}) => {
    await mount(
        <Button variant='default'>Hello world!</Button>
    );
});
test('Button variant destructive', async ({mount}) => {
    await mount(
        <Button variant='destructive'>Hello world!</Button>
    );
});
test('Button variant outline', async ({mount}) => {
    await mount(
        <Button variant='outline'>Hello world!</Button>
    );
});
test('Button variant secondary', async ({mount}) => {
    await mount(
        <Button variant='secondary'>Hello world!</Button>
    );
});
test('Button variant ghost', async ({mount}) => {
    await mount(
        <Button variant='ghost'>Hello world!</Button>
    );
});
test('Button variant link', async ({page, mount}) => {
    const component = await mount(
        <Button variant='link'>Hello world!</Button>
    );
    await component.hover()
    await expect(component).toHaveCSS('text-decoration-line', 'underline')
});
