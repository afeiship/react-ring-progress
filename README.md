# react-ring-progress
> RingProgress component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ring-progress
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-ring-progress/dist/style.css";

  // or use sass
  @import "~@jswork/react-ring-progress/dist/style.scss";
  ```
2. import js
  ```js
  import ReactRingProgress from '@jswork/react-ring-progress/main';
  import '@jswork/react-ring-progress/dist/style.scss';

  function App() {
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <div className="size-50 mx-auto">
          <ReactRingProgress
            lineCap="round"
            stroke={{ start: '#007aff', end: '#ff5722' }}
            value={80}
            lineWidth={10}>
            <div className="absolute text-center layout-trans-center-xy y">
              <p>竞争力</p>
              <h2 className="f-10">80%</h2>
            </div>
          </ReactRingProgress>
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-ring-progress/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ring-progress/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ring-progress
[version-url]: https://npmjs.org/package/@jswork/react-ring-progress

[license-image]: https://img.shields.io/npm/l/@jswork/react-ring-progress
[license-url]: https://github.com/afeiship/react-ring-progress/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ring-progress
[size-url]: https://github.com/afeiship/react-ring-progress/blob/master/dist/react-ring-progress.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ring-progress
[download-url]: https://www.npmjs.com/package/@jswork/react-ring-progress
