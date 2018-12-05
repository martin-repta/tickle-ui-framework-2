import classNames from 'classnames';
import * as React from 'react';

import { NavLink } from 'react-router-dom';

import { Button as MuiButton, WithStyles, withStyles } from '@material-ui/core';
import { ButtonProps as MuiButtonProps } from '@material-ui/core/Button';

import { IconCaretRight } from '../icons';
import FlexLayout from '../layout/flex-layout';
import InlineLoader from '../loaders/Inline';
import styles, { ClassKeys } from './styles';

export interface ButtonProps extends MuiButtonProps {
  fullWidth?: boolean; // stretch to 100% of the parent container
  arrowRight?: boolean; // show right arrow
  isLoading?: boolean; // show loader
}

type Props = ButtonProps & WithStyles<ClassKeys>;

const ButtonNavLink = (props: ButtonProps) => {
  return (
    <NavLink className={props.className} to={props.href as string} title={props.title}>
      {props.children}
    </NavLink>
  );
};

class SmartButton extends React.PureComponent<Props> {
  public render() {
    const {
      classes,
      href,
      children,
      className,
      fullWidth,
      arrowRight,
      isLoading,
      ...otherProps
    } = this.props;

    return (
      <MuiButton
        component={href ? ButtonNavLink : undefined}
        href={href}
        className={classNames(fullWidth && classes.fullWidth, className)}
        {...otherProps}
        classes={{ root: classes.root, label: classes.label, disabled: classes.disabled }}
      >
        {this.renderButtonBody(children)}
      </MuiButton>
    );
  }

  private renderButtonBody(children: React.ReactNode) {
    const { classes, arrowRight, isLoading, color } = this.props;

    if (isLoading) {
      return (
        <React.Fragment>
          <div className={classes.fullWidth}>{children}</div>
          <FlexLayout justifyContent="space-around" className={classes.rightIcon}>
            <InlineLoader size={18} color={color} />
          </FlexLayout>
        </React.Fragment>
      );
    }
    if (arrowRight) {
      return (
        <React.Fragment>
          <div className={classes.fullWidth}>{children}</div>
          <FlexLayout justifyContent="flex-end" className={classes.rightIcon}>
            <IconCaretRight width="18" height="18" className={this.resolveIconFill()} />
          </FlexLayout>
        </React.Fragment>
      );
    }
    return children;
  }

  private resolveIconFill() {
    const { variant, color, classes } = this.props;
    switch (variant) {
      case 'raised':
      case 'contained':
        return classes.iconFillDefault;
      default:
        if (color === 'primary') {
          return classes.iconFillPrimary;
        } else if (color === 'secondary') {
          return classes.iconFillSecondary;
        }
        return classes.iconFillDefault;
    }
  }
}

export default withStyles(styles)(SmartButton);
