import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import ReactSvgCircle, { ReactSvgCircleProps } from '@jswork/react-svg-circle';

const CLASS_NAME = 'react-ring-progress';
export type ReactRingProgressProps = {
  /**
   * The children element.
   */
  children?: ReactNode;
} & ReactSvgCircleProps;

export default class ReactRingProgress extends Component<ReactRingProgressProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  render() {
    const { className, children, value, stroke, lineCap, lineWidth, ...rest } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <ReactSvgCircle className={`${CLASS_NAME}__bg`} value={100} lineWidth={lineWidth} stroke="#ccc" />
        <ReactSvgCircle className={`${CLASS_NAME}__fg`} value={value} stroke={stroke} lineCap={lineCap}
                        lineWidth={lineWidth} />
        {children}
      </div>
    );
  }
}
