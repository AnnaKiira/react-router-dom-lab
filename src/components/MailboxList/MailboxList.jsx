//MailboxList: Displays an index list of all mailboxes
//Equivalent to the index page /mailboxes

//As a user, when viewing the ‘Mailboxes’ page, I should be able to see a list of all the existing mailboxes. 
//Each mailbox in the list should be a square container with a box number _id

//Add the .mail-box class *somehow*

import { Link } from 'react-router-dom'

const MailboxList = (props) => {
  return (
    <>
      <h2>List of Mailboxes</h2>
      <ul>
        {props.mailboxes.map((currentMailbox) => (
          <li key={currentMailbox.name}>
            <Link to={`/mailboxes/${currentMailbox._id}`}>{currentMailbox.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList