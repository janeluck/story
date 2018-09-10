import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SvgIcon from '../components/SvgIcon';

storiesOf('Button', module)
    .add('with text', () => (
        <SvgIcon onClick={action('clicked')} />
    ))
    .add('with some svg', () => (
        <SvgIcon onClick={action('clicked')} />
    ));



