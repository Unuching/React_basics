import { useState } from 'react';
import TextInput from './inputs/textInputs';
import SelectInput from './inputs/selectInput';
import Description from './inputs/description';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    priority: 'Medium',
    category: 'Work',
    description: '',
  });
  const [isFormVisible, SetIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //form Validation
    if (!formData.title || !formData.description) return;

    // creating new object
    const newNote = { id: Date.now(), ...formData };

    // add new notes to state
    setNotes([newNote, ...notes]);

    // reset form
    setFormData({
      title: '',
      priority: 'Medium',
      category: 'Work',
      description: '',
    });
  };

  return (
    <>
      <button
        onClick={() => SetIsFormVisible(!isFormVisible)}
        className='w-full bg-gray-100 border border-gray-300 rounded-lg text-purple-900 py-2 cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'
      >
        {isFormVisible ? 'Hide Form ❌' : 'Add New Note ➕'}
      </button>
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
              { value: 'Medium', label: '🔵 Medium' },
              { value: 'Low', label: '⚪ Low' },
            ]}
          />

          <SelectInput
            label='Category'
            name='category'
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: 'Work', label: '💼 Work' },
              { value: 'Office', label: '🏢 Office' },
              { value: 'Personal', label: '🖳 Personal' },
            ]}
          />

          <Description
            label='Description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className='w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-700'>
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
