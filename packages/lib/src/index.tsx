import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import ReactSvgCircle, { ReactSvgCircleProps } from '@jswork/react-svg-circle';

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
   * The children element.
   */
  children?: ReactNode;
  /**
   * The value of progress.
   */
  value: number;
  /**
   * The color of progress.
   */
  stroke?: ReactSvgCircleProps['stroke'];
  /**
   * The line cap of progress.
   */
  lineCap?: ReactSvgCircleProps['lineCap'];
  /**
   * The line width of progress.
   */
  lineWidth?: ReactSvgCircleProps['lineWidth'];
  /**
   * The background svg circle props.
   */
  bgSvgCircleProps?: ReactSvgCircleProps;
  /**
   * The foreground svg circle props.
   */
  fgSvgCircleProps?: ReactSvgCircleProps;
} & ReactSvgCircleProps;

export default class ReactRingProgress extends Component<ReactRingProgressProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const {
      className,
      children,
      value,
      stroke,
      lineCap,
      lineWidth,
      bgSvgCircleProps,
      fgSvgCircleProps,
      ...rest
    } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <ReactSvgCircle className={`${CLASS_NAME}__bg`} value={100} lineWidth={lineWidth}
                        stroke="#ccc" {...bgSvgCircleProps} />
        <ReactSvgCircle className={`${CLASS_NAME}__fg`} value={value} stroke={stroke} lineCap={lineCap}
                        lineWidth={lineWidth} {...fgSvgCircleProps} />
        {children}
      </div>
    );
  }
}
