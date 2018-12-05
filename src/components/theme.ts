import { Theme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Overrides } from '@material-ui/core/styles/overrides';

import { VIEWPORT_FOR_SCREEN_HEIGHT_800 } from './layout/constants';

export const colors = {
  CHARCOAL: '#323232',

  TICKLE: '#18cdb6', // tickle green
  TICKLE_BG: '#E7FAF7', // tickle green background
  ORANGE: '#F58923', // orange warning
  ORANGE_BG: '#FEEEDE', // orange warning background
  RED: '#F90000', // red error
  RED_BG: '#FEE5E5' // red error background
};

export const typography: TypographyOptions = {
  fontSize: 14,

  headline: {
    fontSize: 32,
    lineHeight: '32px',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 'bold'
  },

  subheading: {
    fontSize: 18,
    lineHeight: '22px',
    fontWeight: 'bold'
  }
};

export const palette: PaletteOptions = {
  primary: {
    main: colors.TICKLE,
    light: colors.TICKLE_BG,
    // TODO: we update this background color using correct color code.
    // light: 'rgba(0,194,185,0.1)',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: colors.ORANGE,
    light: colors.ORANGE_BG,
    contrastText: '#FFFFFF'
  },

  text: {
    // The most important text.
    primary: '#333333',
    // Secondary text.
    secondary: '#888888',
    // Disabled text have even lower visual prominence.
    disabled: '#888888'
  },
  action: {
    disabled: '#666666',
    disabledBackground: '#F2F2F2'
  },
  divider: '#D0D0D0',
  grey: {
    50: '#fafafa', // table row background (if used)
    100: '#f2f2f2' // layout panels
  },
  error: {
    main: colors.RED,
    light: colors.RED_BG
  }
};

// export interface TickleOverrides extends Overrides {
//   MuiTabIndicator?: Partial<StyleRules<TabIndicatorClassKey>>;
// }

export const getOverrides = (theme: Theme): Overrides => {
  const overrides: Overrides = {
    MuiTooltip: {
      tooltip: {
        backgroundColor: theme.palette.grey[700],

        '&:after': {
          borderColor: 'rgba(136, 183, 213, 0)',
          borderWidth: 8,
          border: 'solid transparent',
          content: '""',
          height: 0,
          width: 0,
          position: 'absolute',
          pointerEvents: 'none'
        }
      },
      tooltipPlacementRight: {
        '&:after': {
          right: '100%',
          top: '50%',

          borderRightColor: theme.palette.grey[700],
          marginTop: -8
        }
      },
      tooltipPlacementLeft: {
        '&:after': {
          left: '100%',
          top: '50%',

          borderLeftColor: theme.palette.grey[700],
          marginTop: -8
        }
      },
      tooltipPlacementTop: {
        '&:after': {
          left: '50%',
          top: '100%',

          borderTopColor: theme.palette.grey[700],
          marginLeft: -8
        }
      },
      tooltipPlacementBottom: {
        '&:after': {
          left: '50%',
          bottom: '100%',

          borderBottomColor: theme.palette.grey[700],
          marginLeft: -8
        }
      }
    },
    MuiTab: {
      root: {
        height: 39,
        '@media (min-width: 0px)': {
          minWidth: 'auto'
        },
        textTransform: 'initial',
        borderBottom: 'none'
      },
      labelIcon: {
        height: 39,
        minHeight: 39
      },
      wrapper: {
        '& .material-icons': {
          fontSize: 20,
          paddingLeft: 18,
          '& + $labelContainer': {
            paddingLeft: 8
          }
        },
        '& svg': {
          paddingLeft: 18,
          '& + $labelContainer': {
            paddingLeft: 8
          }
        },
        flexDirection: 'row'
      },
      label: {
        // always
        '@media (min-width: 0px)': {
          fontSize: 18
        }
      },
      labelContainer: {
        // leave this here to be consistent with media query since we are referencing this values in our app directly
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 18,
        paddingRight: 18,
        // always
        '@media (min-width: 0px)': {
          paddingLeft: 18,
          paddingRight: 18
        }
      },
      labelWrapped: {
        // leave empty otherwise fontSize will get smaller on sm screens
      }
    },
    MuiTabs: {
      root: {
        minHeight: 41,
        marginBottom: 28,
        [`@media (max-height: ${VIEWPORT_FOR_SCREEN_HEIGHT_800}px)`]: {
          marginBottom: 8
        }
      },
      scroller: {
        borderBottom: `1px solid ${theme.palette.divider}`
      },
      indicator: {
        height: 4
      }
    },
    MuiIcon: {
      root: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    MuiBadge: {
      colorPrimary: {
        color: 'white',
        fontWeight: 'bold'
      }
    },
    MuiButton: {
      root: {
        textTransform: 'initial',
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 'bold',
        minHeight: 34,
        boxSizing: 'border-box',
        padding: '5px 12px'
      },
      disabled: {
        color: theme.palette.action.disabled,
        backgroundColor: theme.palette.action.disabledBackground,
        '& .material-icons': {
          color: theme.palette.action.disabled
        }
      },
      raised: {
        boxShadow: 'none'
      },
      contained: {
        backgroundColor: colors.CHARCOAL,
        color: theme.palette.common.white,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: theme.palette.common.black,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: colors.CHARCOAL
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground
          }
        }
      },
      outlined: {
        borderColor: colors.CHARCOAL,
        '&$textSecondary': {
          borderColor: theme.palette.secondary.main,
          '&$disabled': {
            borderColor: theme.palette.action.disabledBackground
          }
        },
        '&$textPrimary': {
          borderColor: theme.palette.primary.main,
          '&$disabled': {
            borderColor: theme.palette.action.disabledBackground
          }
        }
      },
      // raisedPrimary: {
      //   '& .material-icons': {
      //     color: theme.palette.primary.contrastText
      //   }
      // },
      // flatPrimary: {
      //   border: '1px solid',
      //   padding: '5px 12px'
      // },
      label: {
        textAlign: 'center'
      }
    },
    MuiIconButton: {
      root: {
        '&$disabled': {
          color: theme.palette.text.disabled
        }
      }
    },
    MuiListItem: {
      default: {
        paddingTop: 6,
        paddingBottom: 6
      },
      dense: {
        paddingTop: 4,
        paddingBottom: 4
      },
      gutters: {
        '@media (min-width: 0px)': {
          paddingLeft: 14,
          paddingRight: 14
        }
      }
    },
    MuiTableRow: {
      root: {
        height: 50,
        [`@media (max-height: ${VIEWPORT_FOR_SCREEN_HEIGHT_800}px)`]: {
          height: 40
        }
      },
      head: {
        height: 'auto'
      },
      hover: {
        '&:hover': {
          cursor: 'pointer',
          '& td': {
            backgroundColor: theme.palette.grey[100],
            borderColor: '#888888'
          }
        }
      },
      footer: {
        [`@media (max-height: ${VIEWPORT_FOR_SCREEN_HEIGHT_800}px)`]: {
          height: 38
        }
      },
      selected: {
        '& td': {
          backgroundColor: theme.palette.primary.light + ' !important',
          borderColor: theme.palette.primary.main + ' !important'
        }
      }
    },
    MuiTableCell: {
      root: {
        boxSizing: 'border-box',
        borderBottom: 'none',
        padding: '9px 0px 9px 16px',
        [`@media (max-height: ${VIEWPORT_FOR_SCREEN_HEIGHT_800}px)`]: {
          padding: '2px 0px 2px 16px'
        },
        '&:last-child': {
          paddingRight: 0 // explicitly override default rule
        },

        '&$head': {
          paddingBottom: 0
        }
      },
      head: {
        color: theme.palette.text.primary,
        fontSize: 13,
        fontWeight: 'bold',

        '&:first-child': {
          paddingLeft: 0 // explicitly override default rule
        }
      },
      footer: {
        borderTop: `1px solid ${theme.palette.divider}`
      },
      body: {
        background: theme.palette.grey[50],
        borderColor: theme.palette.divider,
        border: `1px solid ${theme.palette.divider}`,
        borderLeft: 'none',
        borderRight: 'none'
      }
    },
    MuiTablePagination: {
      toolbar: {
        height: 38,
        minHeight: 38
      },
      actions: {
        '& button': {
          height: 38,
          width: 38
        }
      },
      caption: {
        color: theme.palette.text.primary
      }
    },

    MuiFormControl: {
      root: {
        width: 250
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 13,
        lineHeight: '15px',
        fontWeight: 'bold',
        color: theme.palette.text.primary
      }
    },
    MuiInput: {
      root: {
        fontSize: 14,
        lineHeight: 'normal',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 4,
        backgroundColor: theme.palette.common.white,
        transition: theme.transitions.create(['border-color', 'box-shadow'])
      },
      focused: {
        borderColor: theme.palette.primary.main,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      },
      formControl: {
        'label + &': {
          marginTop: 20
        }
      },
      input: {
        padding: '8px 10px 7px',
        '&[readonly]': {
          backgroundColor: theme.palette.action.disabledBackground,
          borderRadius: 3
        }
      },
      multiline: {
        padding: '8px 10px 7px'
      },
      error: {
        borderColor: theme.palette.error.main
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: 'none'
      }
    },
    MuiInputAdornment: {
      positionStart: {
        maxHeight: 32,
        marginRight: 0,
        marginLeft: 4,
        color: theme.palette.text.primary
      },
      positionEnd: {
        maxHeight: 32,
        marginLeft: 0
      }
    },
    MuiSelect: {
      select: {
        width: `calc(100% - ${32 + 1}px)`,
        paddingRight: 23
      },
      selectMenu: {
        minHeight: 'unset'
      }
    },
    MuiRadio: {
      root: {
        height: 32,
        width: 32
      }
    },
    MuiCheckbox: {
      root: {
        height: 32,
        width: 32
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: -10
      }
    },
    MuiMenuItem: {
      root: {
        '&$selected': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: theme.spacing.unit
      }
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(77, 82, 87, 0.9)'
      }
    }
  };

  return overrides;
};
