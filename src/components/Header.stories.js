import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Header from './Header';

storiesOf('Header', module).add('with title', () => (
  <Header siteTitle={text('Site Title', 'Alan Shortis')} />
));
