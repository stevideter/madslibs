import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Button, Welcome } from '@storybook/react/demo';
import TextInput from '../src/components/TextInput/TextInput';
const stories = storiesOf('Madslibs', module);
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
stories.add('with label', () =>{ 
    const label = text('Label', 'My label');
    const value = text('Value', 'My value');
    return (<TextInput label={label} value={value}>Text Input</TextInput>);
});
