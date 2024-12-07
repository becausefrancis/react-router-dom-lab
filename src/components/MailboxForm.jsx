import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  size: '',
};

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="size">Size:</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="">--Select--</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;