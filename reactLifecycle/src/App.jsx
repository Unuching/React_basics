import { use, useState } from 'react';

const App = () => {
  const [showLogger, SetShowLogger] = useState(false);

  return (
    <div className='container'>
      <h2>React Lifecycle Playground</h2>
      <button
        className='primary-btn'
        onClick={() => SetShowLogger(!showLogger)}
      >
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>
      {showLogger && <div>LifeCycle Logger Here</div>}
    </div>
  );
};

export default App;
