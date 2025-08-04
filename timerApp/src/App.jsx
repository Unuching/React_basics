import { useState, useRef } from 'react';

const App = () => {
  const timerRef = useRef(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = ()=>{
    
  }

  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center'>
      <h2 className='text-4xl font-semibold mt-4'>⏰ Timer: {time}</h2>

      <button onClick={toggleTimer} className='mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
        {isRunning ? 'Pause' : 'Start'}
      </button>
    </div>
  );
};

export default App;
