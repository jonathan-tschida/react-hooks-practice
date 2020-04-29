import React, {useState} from 'react';

const IdeaForm = ({addIdea}) => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const submitIdea = (e) => {
    e.preventDefault();
    const newIdea = {
      id: Date.now(),
      title,
      details,
      isCompleted: false
    }
    addIdea(newIdea);
    setTitle('');
    setDetails('');
  }

  return (
    <form onSubmit={submitIdea}>
      <input
        type='text'
        placeholder='Title...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type='text'
        placeholder='Details...'
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button>+</button>
    </form>
  )
}

export default IdeaForm;
