import { useState } from 'react';
import LifecycleLogger from './components/lifecycleLogger';

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
      {showLogger && <LifecycleLogger />}
    </div>
  );
};

export default App;
