import classNames from 'classnames';
import * as React from 'react';

import { Button, Icon, PropTypes, StandardProps, WithStyles, withStyles } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';

import styles, { ClassKeys } from './styles';

export interface ButtonLinkProps extends StandardProps<ButtonProps, ClassKeys, 'classes'> {
  icon?: string | React.ReactNode;
  iconColor?: PropTypes.Color;
}

export type Props = ButtonLinkProps & WithStyles<ClassKeys>;

export class ButtonLink extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    color: 'default',
    iconColor: 'primary'
  };

  public render() {
    const { classes, icon, iconColor, children, className, ...otherProps } = this.props;
    return (
      <Button
        className={className}
        classes={{
          root: classNames(classes.root, icon == null && classes.paddingLeft),
          label: classes.label,
          disabled: classes.disabled
        }}
        {...otherProps}
      >
        {this.renderIcon()}
        <span className={classes.text}>{children}</span>
      </Button>
    );
  }

  private renderIcon() {
    const { icon, classes, iconColor } = this.props;
    if (!icon) {
      return null;
    }

    if (typeof icon === 'string') {
      return (
        <Icon color={iconColor} className={classes!.icon}>
          {icon}
        </Icon>
      );
    } else {
      const className = classNames(classes.iconComponent, {
        [classes.fillPrimary]: iconColor === 'primary',
        [classes.fillSecondary]: iconColor === 'secondary'
      });

      // TODO add logic about colors, so icon can get right color
      React.Children.only(icon);
      return React.cloneElement(icon as JSX.Element, { className });
    }
  }
}

export default withStyles(styles)(ButtonLink);
