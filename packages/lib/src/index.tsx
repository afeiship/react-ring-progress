// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { ReactNode, Component } from 'react';
import ReactSvgCircle, { ReactSvgCircleProps } from '@jswork/react-svg-circle';

const CLASS_NAME = 'react-ring-progress';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactRingProgressProps = {
  /**
   * The children element.
   */
  children?: ReactNode | ((props: ReactRingProgressProps) => (ReactNode & Element));
} & ReactSvgCircleProps;

export default class ReactRingProgress extends Component<ReactRingProgressProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {};

  get children() {
    const { children } = this.props;
    const isFunction = typeof children === 'function';
    return isFunction ? children(this.props) : children;
  }

  render() {
    const { className, children, value, stroke, lineCap, lineWidth, ...rest } = this.props;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <ReactSvgCircle className={`${CLASS_NAME}__bg`} value={100} lineWidth={lineWidth} stroke="#ccc" />
        <ReactSvgCircle className={`${CLASS_NAME}__fg`} value={value} stroke={stroke} lineCap={lineCap}
                        lineWidth={lineWidth} />
        {this.children}
      </div>
    );
  }
}
