import { useState } from 'react';

const Counter = () => {
  const [c, setC] = useState(0);
  const handleChange = () => {
    setC(c + 1);
  };
  return (
    <div>
      <h2>Count:{c}</h2>
      <button onClick={handleChange}>
        <h1>Click Me</h1>
      </button>
    </div>
  );
};

export default Counter;
