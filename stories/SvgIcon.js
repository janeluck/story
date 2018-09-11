import React from 'react';
import { storiesOf } from '@storybook/react';
import { HULI, Zoo, SvgIcon } from '../examples/SvgIcon';

storiesOf('SvgIcon', module)
    .add('两只老虎', () => (
        <div>
            <SvgIcon type='laohu' />
            <SvgIcon type='laohu' />
        </div>

    ))
    .add('一只狐狸', () => (
        <HULI />
    ))
    .add('动物园里有什么', () => (
        <Zoo />
    ))




