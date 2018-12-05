import * as React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/button';
import ButtonLink from '../src/components/button-link';
import { IconCaretLeft } from '../src/components/icons';
import NavLink from '../src/components/nav-link';
import muiThemeDecorator from './decorators/muiThemeDecorator';

// const handleOnClose = (value: boolean | undefined) => {
//   action('Closed with value: ' + value);
// };

storiesOf('Buttons', module)
  .addDecorator(muiThemeDecorator)
  .addDecorator(checkA11y)
  .add('Button with loading', () => (
    <div>
      <Button color="primary" isLoading={true} disabled={false} onClick={action('button-click')}>
        Send email
      </Button>
      <div style={{ height: 20 }} />
      <Button color="primary" isLoading={true} disabled={true} onClick={action('button-click')}>
        Send email
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" isLoading={true} disabled={false}>
        Send email
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" isLoading={true} disabled={true}>
        Send email
      </Button>
    </div>
  ))
  .add('Button outlined with arrow', () => (
    <div>
      <Button color="primary" variant="outlined" arrowRight={true} onClick={action('button-click')}>
        Reject
      </Button>
      <div style={{ height: 20 }} />
      <Button color="primary" variant="outlined" isLoading={true} disabled={true}>
        Reject
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" variant="outlined" arrowRight={true}>
        Reject
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" variant="outlined" isLoading={true} disabled={true}>
        Reject
      </Button>
    </div>
  ))
  .add('Button contained with arrow', () => (
    <div>
      <Button
        color="primary"
        variant="contained"
        arrowRight={true}
        onClick={action('button-click')}
      >
        Approve
      </Button>
      <div style={{ height: 20 }} />
      <Button color="primary" disabled={true} variant="contained" arrowRight={true}>
        Approve
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" variant="contained" arrowRight={true}>
        Approve
      </Button>
      <div style={{ height: 20 }} />
      <Button color="secondary" disabled={true} variant="contained" arrowRight={true}>
        Approve
      </Button>
    </div>
  ))
  .add('Button outlined full width', () => (
    <div style={{ width: 200 }}>
      <Button color="primary" fullWidth={true} variant="outlined" onClick={action('button-click')}>
        Send email
      </Button>
      <div style={{ height: 50 }} />
      <Button color="primary" fullWidth={true} variant="outlined" arrowRight={true}>
        Send email
      </Button>
      <div style={{ height: 50 }} />
      <Button color="primary" fullWidth={true} variant="outlined" isLoading={true}>
        Send email
      </Button>
      <div style={{ height: 50 }} />
      <Button color="secondary" fullWidth={true} variant="outlined">
        Send email
      </Button>
      <div style={{ height: 50 }} />
      <Button color="secondary" fullWidth={true} variant="outlined" arrowRight={true}>
        Send email
      </Button>
      <div style={{ height: 50 }} />
      <Button color="secondary" fullWidth={true} variant="outlined" isLoading={true}>
        Send email
      </Button>
    </div>
  ))
  .add('ButtonLink', () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: 200 }}>
      <ButtonLink iconColor="primary" icon={<IconCaretLeft />}>
        Back
      </ButtonLink>
      <ButtonLink iconColor="primary">Confirm</ButtonLink>
    </div>
  ))
  .add('NavLink', () => (
    <div>
      <BrowserRouter>
        <NavLink icon={false} to="/TODO">
          Back
        </NavLink>
      </BrowserRouter>
    </div>
  ))
  .add('NavLink with icon', () => (
    <div>
      <BrowserRouter>
        <NavLink iconPosition="left" to="/TODO">
          Back
        </NavLink>
      </BrowserRouter>
    </div>
  ))
  .add('NavLink with icon and color', () => (
    <div>
      <BrowserRouter>
        <NavLink iconPosition="left" iconColor="primary" to="/TODO">
          <div>
            <div>Back</div>
            <div>AAAA</div>
          </div>
        </NavLink>
      </BrowserRouter>
    </div>
  ))
  .add('NavLink with icon component', () => (
    <div>
      <BrowserRouter>
        <NavLink icon={<IconCaretLeft />} to="/TODO">
          Back
        </NavLink>
      </BrowserRouter>
    </div>
  ))
  .add('NavLink with icon component and secondary color', () => (
    <div>
      <BrowserRouter>
        <NavLink iconColor="secondary" icon={<IconCaretLeft />} to="/TODO">
          Back
        </NavLink>
      </BrowserRouter>
    </div>
  ));
