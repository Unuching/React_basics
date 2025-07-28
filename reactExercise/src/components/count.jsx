import { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Number: {count}</h2>
      <button onClick={handleChange}>Click Me</button>
    </div>
  );
};

export default Count;
