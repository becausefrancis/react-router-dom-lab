import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [formData, setFormData] = useState({
    mailboxId: '',
    recipient: '',
    message: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData); 
    setFormData({ mailboxId: '', recipient: '', message: '' });
    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
          required
        >
          <option value="">--Select a Mailbox--</option>
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox.name}
            </option>
          ))}
        </select>

        <label htmlFor="recipient">Recipient:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;