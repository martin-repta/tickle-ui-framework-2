import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | 'root' //
  | 'label'
  | 'disabled'
  | 'fullWidth'
  | 'rightIcon'
  | 'iconFillDefault'
  | 'iconFillPrimary'
  | 'iconFillSecondary';

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  root: {},
  label: {
    textAlign: 'center',
    width: '100%'
  },
  disabled: {}, // leave here to allow override
  fullWidth: {
    width: '100%'
  },
  rightIcon: {
    width: 26,
    flexShrink: 0,
    marginRight: -10
  },
  iconFillDefault: {
    fill: theme.palette.common.white
  },
  iconFillPrimary: {
    fill: theme.palette.primary.main
  },
  iconFillSecondary: {
    fill: theme.palette.secondary.main
  }
  // primaryColor: {
  //   color: theme.palette.primary.main
  // },
  // loader: {}
});

export default styles;
