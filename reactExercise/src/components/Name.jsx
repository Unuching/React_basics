import { useState } from 'react';
const Name = () => {
  const [name, setName] = useState('');
  const handleUnu = () => {
    setName('Unuching marma');
  };
  const handleMema = () => {
    setName('Mema');
  };
  return (
    <div>
      <h2 className='font-extrabold'>My Name is {name}</h2>
      <button className='p-7 bg-blue-500 rounded-lg mr-3 ' onClick={handleUnu}>
        Click Here
      </button>

      <button className='p-7 bg-blue-500 rounded-lg ml-4' onClick={handleMema}>
        Click
      </button>
    </div>
  );
};

export default Name;
