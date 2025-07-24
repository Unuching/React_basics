import { useState } from 'react';
import TextInput from './inputs/textInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    const newNote = { id: Date.now(), ...formData };

    setNotes([newNote, ...notes]);

    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
  };

  return (
    <>
      {/* {Toggle Button} */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-pink-300 transition mb-4  '
      >
        {isFormVisible ? 'Hide Form ❌' : 'Add new Note ➕'}
      </button>
      {/* {Form} */}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className='mb-6'>
          <TextInput
            label='Title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label='Priority'
            name='priority'
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'High', label: '🔴 High' },
              { value: 'Medium', label: '🌕 Medium' },
              { value: 'Low', label: '🔵 Low' },
            ]}
          />
          <SelectInput
            label='Category'
            name='categoty'
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '💼 Work' },
              { value: 'Personal', label: '💻 Personal' },
              { value: 'Ideas', label: '💭 Ideas' },
            ]}
          />

          <TextAreaInput
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 '>
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
