import ReactRingProgress from '@jswork/react-ring-progress/src/main';
import '@jswork/react-ring-progress/src/style.scss';

function App() {
  const childFn = ({ value }) => {
    return <div className="absolute text-center layout-trans-center-xy y">
      <p>竞争力</p>
      <h2 className="f-10">{value}%</h2>
    </div>;
  };

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
          lineWidth={10}
          children={childFn} />
      </div>
    </div>
  );
}

export default App;
