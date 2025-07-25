import { useState } from 'react';
import NoteForm from './components/noteForm';
import NoteList from './components/Notelist';
const App = () => {
  const [notes, setNotes] = useState([]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?'
    );
    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-4 text-center'>📝 My App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
