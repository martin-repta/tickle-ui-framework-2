import {muiTheme} from 'storybook-addon-material-ui';

import { createMuiTheme } from '@material-ui/core/styles';

import { getOverrides, palette, typography } from '../../src/components/theme';

const theme = createMuiTheme({
  typography,
  palette
});

const overrides = getOverrides(theme);
export default muiTheme([Object.assign(theme, { overrides })])
