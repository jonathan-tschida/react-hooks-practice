import React, {useState} from 'react';
import './App.css';
import IdeaForm from './IdeaForm';
import Idea from './Idea';

const App = () => {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (idea) => {
    const updatedIdeas = [...ideas, idea];
    setIdeas(updatedIdeas);
  }

  const markCompleted = (id) => {
    const updatedIdeas = [...ideas];
    const matchingIdea = updatedIdeas.find(idea => idea.id === id);
    matchingIdea.isCompleted = !matchingIdea.isCompleted;
    setIdeas(updatedIdeas);
  }

  const removeIdea = (id) => {
    const updatedIdeas = ideas.filter(idea => idea.id !== id);
    setIdeas(updatedIdeas);
  }

  return (
    <section>
      <h1>IdeaBox with hooks</h1>
      <IdeaForm addIdea={addIdea}/>
      {ideas.map(idea =>
        <Idea
          key={idea.id}
          {...idea}
          markCompleted={markCompleted}
          removeIdea={removeIdea}
        />
      )}
    </section>
  )
}

export default App;
