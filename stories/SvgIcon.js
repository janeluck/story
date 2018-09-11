import React from 'react';
import { storiesOf } from '@storybook/react';
import {HULI, SvgIcon} from '../examples/SvgIcon';

storiesOf('SvgIcon', module)
    .add('with text', () => (
        <SvgIcon type='laohu' />
    ))
    .add('一只狐狸', () => (
        <HULI  />
    ));



