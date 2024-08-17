import ReactRingProgress from '@jswork/react-ring-progress/src/main';
import '@jswork/react-ring-progress/src/style.scss';

function App() {
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <div className="mx-auto wp-3 max-w-100 x-5 debug-red bg-slate-200 rounded-md p-2 dark:text-white
           dark:bg-slate-800">
        <ReactRingProgress value={80} thickness={6} color="blue">
          <div className="absolute text-center layout-trans-center-xy y">
            <p>竞争力</p>
            <h2 className="f-10">80%</h2>
          </div>
        </ReactRingProgress>

        <ReactRingProgress
          value={60}
          thickness={6}
          lineCap="round"
          bgColor="lightblue"
          colors={[
            { offset: 0, value: 'red' },
            { offset: 50, value: 'yellow' },
            { offset: 100, value: 'green' },
          ]}
        >
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
