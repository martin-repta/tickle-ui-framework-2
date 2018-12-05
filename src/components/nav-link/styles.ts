import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys =
  | 'root' //
  | 'text'
  | 'icon'
  | 'iconLeft'
  | 'fillPrimary'
  | 'fillSecondary'
  | 'iconRight'
  | 'textEllipsis';

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  root: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary
  },
  text: {
    textDecoration: 'underline'
  },
  icon: {
    fontSize: theme.spacing.unit * 2,
    flexShrink: 0
  },
  iconLeft: {},
  iconRight: {},
  fillPrimary: {
    fill: theme.palette.primary.main
  },
  fillSecondary: {
    fill: theme.palette.secondary.main
  },
  textEllipsis: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

export default styles;
