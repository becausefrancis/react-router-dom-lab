import { useState } from 'react';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import LetterForm from './components/LetterForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
  };

  const [letters, setLetters] = useState([]);

  const addLetter = (letterMessage) => {
    setLetters([...letters, letterMessage]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} letters={letters} />}
        />
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />} 
        />
        <Route
          path="/new-letter"
          element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
      </Routes>
    </>
  );
};


export default App;