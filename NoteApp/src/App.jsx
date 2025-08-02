import NoteForm from './components/noteForm';
import { useState } from 'react';

const APP = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg '>
      <h2 className='text-2xl font-bold text-center mb-4'> 📝 Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default APP;
