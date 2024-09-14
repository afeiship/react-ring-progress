import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import { ReactSvg, ReactCircle, ReactCircleProps } from '@jswork/react-svg-circle';

const CLASS_NAME = 'react-ring-progress';

export type ReactRingProgressProps = {
  /**
   * The background svg circle props.
   */
  bgClassName?: string;
  /**
   * The foreground svg circle props.
   */
  fgClassName?: string;
  /**
   * The rest props of background circle.
   */
  bgCircleProps?: Omit<ReactCircleProps, 'thickness' | 'value' | 'colors'>;
  /**
   * The rest props of foreground circle.
   */
  fgCircleProps?: Omit<ReactCircleProps, 'thickness' | 'value' | 'colors'>;
  /**
   * The children element.
   */
  children?: ReactNode;
  /**
   * The background color of circle.
   */
  bgColor?: string;
} & ReactCircleProps;

export default class ReactRingProgress extends Component<ReactRingProgressProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const {
      className,
      children,
      thickness,
      value,
      lineCap,
      color,
      colors,
      bgClassName,
      fgClassName,
      bgCircleProps,
      fgCircleProps,
      bgColor,
    } = this.props;

    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)}>
        <ReactSvg>
          <ReactCircle
            thickness={thickness}
            className={bgClassName}
            color={bgColor}
            {...bgCircleProps}
          />
          <ReactCircle
            thickness={thickness}
            lineCap={lineCap}
            className={fgClassName}
            value={value}
            color={color}
            colors={colors}
            {...fgCircleProps}
          />
        </ReactSvg>
        {children}
      </div>
    );
  }
}
