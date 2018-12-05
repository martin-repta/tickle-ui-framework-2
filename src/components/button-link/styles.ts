import { StyleRulesCallback, Theme } from '@material-ui/core/styles';

export type ClassKeys = 'root' | 'paddingLeft' | 'label' | 'text' | 'icon' | 'iconComponent' | 'fillPrimary' | 'fillSecondary' | 'disabled';

const styles: StyleRulesCallback<ClassKeys> = (theme: Theme) => ({
  root: {
    border: 'none',
    paddingLeft: 0,
    paddingRight: 4,
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'none',
    minHeight: 'auto',
    minWidth: 'auto',

    '&:hover': {
      backgroundColor: 'transparent',
      // Reset on mouse devices
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  paddingLeft: {
    paddingLeft: 4,
    marginLeft: -4
  },
  label: {
    display: 'inherit',
    '& .material-icons': {
      fontSize: 15,
      width: 16
    }
  },
  text: {
    textDecoration: 'underline'
  },

  icon: {
    fontSize: theme.spacing.unit * 2
  },
  iconComponent: {
    height: 16,
    width: 16
  },
  disabled: {
    // leave here to allow override
  },
  fillPrimary: {
    fill: theme.palette.primary.main
  },
  fillSecondary: {
    fill: theme.palette.secondary.main
  }
});

export default styles;
