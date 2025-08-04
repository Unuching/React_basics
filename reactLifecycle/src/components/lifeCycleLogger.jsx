import { useState, useEffect } from 'react';

const LigecycleLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted again...');

    return () => {
      console.log('Component Unmounted again...');
    };
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log('component updated', count);
    }
  }, [count]);

  return (
    <div className='logger-container'>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className='secondary-btn'>
        Update
      </button>
    </div>
  );
};

export default LigecycleLogger;
