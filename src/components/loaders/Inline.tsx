import classNames from 'classnames';
import * as React from 'react';

import { CircularProgress } from '@material-ui/core';
import { StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';

type ClassKeys =
  | 'loadingIcon' //
  | 'center';

const styles: StyleRulesCallback<ClassKeys> = theme => ({
  loadingIcon: {
    fontSize: theme.typography.fontSize
  },
  center: {
    marginLeft: 'calc(50% - 20px)'
  }
});

export interface InlineLoaderProps {
  className?: string;
  style?: object;
  size?: number;
  color?: any;
  alignCenter?: boolean;
}

type Props = InlineLoaderProps & WithStyles<ClassKeys>;

class InlineLoader extends React.PureComponent<Props> {
  public render() {
    const { classes, className, alignCenter, ...other } = this.props;
    return (
      <CircularProgress
        className={classNames(classes.loadingIcon, alignCenter && classes.center, className)}
        {...other}
      />
    );
  }
}

export default withStyles(styles)(InlineLoader);
