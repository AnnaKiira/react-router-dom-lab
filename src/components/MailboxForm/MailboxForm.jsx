//MailboxForm: Allows users to enter details for and submit new mailboxes
//Equivalent to the NEW page /new-mailbox

//As a user, when viewing the form on the ‘New Mailbox’ page, I should see a <form> with an <input> for the name of the boxholder
//and a <select> menu for the boxsize. The <select> menu should include three options: ‘Small’, ‘Medium’, and ‘Large’.

//As a user, when I submit the ‘New Mailbox’ form, I should be redirected to the ‘Mailboxes’ page (/mailboxes) where I will see
//the newly created mailbox added to the list.

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //using to recirect to mailboxes page 

const initialState = {
    /* _id: 1, */
    boxholder: '',
    boxSize: '',
};


const MailboxForm = ({addBox}) => {
  const [formData, setFormData] = useState(initialState);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData)
    setFormData(initialState)
    navigate('/mailboxes')
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Name of Boxholder:</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Boxsize:</label>
        <select
        id="boxSize"
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
        >
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

  