import NoteForm from './components/noteForm';
import { useState } from 'react';
import NoteList from './components/noteList';

const APP = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm('Are You Sure?');
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id != id));
    }
  };

  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg '>
      <h2 className='text-2xl font-bold text-center mb-4'> 📝 Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default APP;
