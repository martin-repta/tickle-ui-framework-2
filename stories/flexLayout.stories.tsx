import * as React from 'react';

import { Button } from '@material-ui/core';
import { storiesOf } from '@storybook/react';

import FlexLayout from '../src/components/layout/flex-layout';
import muiThemeDecorator from './decorators/muiThemeDecorator';

storiesOf('Flex layout', module)
  .addDecorator(muiThemeDecorator)
  .add('basic', () => (
    <div>
      <FlexLayout justifyContent="space-between" alignItems="center">
        <div style={{ width: 200, height: 300, border: '1px solid blue', flex: '1 1 auto' }} />
        <div style={{ width: 200, height: 200, border: '1px solid red', marginLeft: 40 }} />
      </FlexLayout>
    </div>
  ))
  .add('custom html component', () => (
    <div>
      <FlexLayout
        component="section"
        componentProps={{ variant: 'raised', color: 'primary' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <div style={{ width: 100, height: 30, border: '1px solid blue', flex: '1' }} />
        <div style={{ width: 50, height: 20, border: '1px solid red', marginLeft: 10 }} />
      </FlexLayout>
    </div>
  ))
  .add('custom React component', () => (
    <div>
      <FlexLayout
        component={Button}
        componentProps={{ variant: 'raised', color: 'primary' }}
        justifyContent="space-between"
        alignItems="center"
      >
        <div style={{ width: 100, height: 30, border: '1px solid blue', flex: '1' }} />
        <div style={{ width: 50, height: 20, border: '1px solid red', marginLeft: 10 }} />
      </FlexLayout>
    </div>
  ));
