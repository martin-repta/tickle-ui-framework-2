import classNames from 'classnames';
import * as React from 'react';

import { Link, LinkProps } from 'react-router-dom';

import { Icon } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/core/styles';

import { IconCaretLeft, IconCaretRight } from '../icons';
import styles, { ClassKeys } from './styles';

export type IconPosition = 'left' | 'right';
export type IconColor = 'inherit' | 'primary' | 'secondary';

export interface NavLinkProps extends LinkProps {
  icon?: string | boolean | React.ReactNode;
  iconPosition?: IconPosition;
  iconColor?: IconColor;
}

type Props = NavLinkProps & WithStyles<ClassKeys>;

class NavLink extends React.PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    iconPosition: 'left',
    iconColor: 'inherit'
  };

  private icon?: React.ReactNode;

  constructor(props: Props) {
    super(props);

    this.icon = this.resolveIcon();
  }

  private resolveIcon() {
    const { icon, iconColor, iconPosition, classes } = this.props;

    if (icon === false) {
      return null;
    }

    const isLeft = iconPosition === 'left';
    let className = classNames({
      [classes.icon]: true,
      [classes.iconLeft]: isLeft,
      [classes.iconRight]: !isLeft
    });

    switch (typeof icon) {
      case 'boolean':
        if (iconColor !== 'inherit') {
          className = classNames(className, {
            [classes.fillPrimary]: iconColor === ('primary' as IconColor),
            [classes.fillSecondary]: iconColor === ('secondary' as IconColor)
          });
        }

        if (isLeft) {
          return <IconCaretRight width="18" height="18" className={className} />;
        }

        return <IconCaretLeft width="18" height="18" className={className} />;

      case 'string':
        return (
          <Icon color={iconColor} className={className}>
            {icon}
          </Icon>
        );
      default:
        if (iconColor !== 'inherit') {
          className = classNames(className, {
            [classes.fillPrimary]: iconColor === ('primary' as IconColor),
            [classes.fillSecondary]: iconColor === ('secondary' as IconColor)
          });
        }

        if (!icon) {
          if (isLeft) {
            return <IconCaretLeft width="18" height="18" className={className} />;
          }

          return <IconCaretRight width="18" height="18" className={className} />;
        }

        React.Children.only(icon);

        return React.cloneElement(icon as JSX.Element, { className });
    }
  }

  public render() {
    const {
      classes,
      children,
      className,
      icon,
      iconColor,
      iconPosition,
      ...otherProps
    } = this.props;
    return (
      <Link className={classNames(classes.root, className)} {...otherProps}>
        {this.renderLeftIcon()}
        {this.renderBody()}
        {this.renderRightIcon()}
      </Link>
    );
  }

  private renderBody() {
    const { children, classes } = this.props;
    if (!children) {
      return null;
    }

    if (typeof children === 'string') {
      return <span className={classNames(classes.text, classes.textEllipsis)}>{children}</span>;
    }

    try {
      // Verifies that children has only one child (a React element) and returns it. Otherwise this method throws an error.
      const child = React.Children.only(children);
      return React.cloneElement(child, {
        className: classNames(classes.text, child.props.className)
      });
    } catch (ex) {
      // tslint:disable-next-line:no-console
      console.error(
        'NavLink does not accept multiple children. Please wrap them into one element.'
      );
      return null;
    }
  }

  private renderLeftIcon() {
    const { iconPosition } = this.props;
    if (iconPosition === 'left') {
      return this.icon;
    }

    return null;
  }

  private renderRightIcon() {
    const { iconPosition } = this.props;
    if (iconPosition === 'right') {
      return this.icon;
    }

    return null;
  }
}

export default withStyles(styles)(NavLink);
