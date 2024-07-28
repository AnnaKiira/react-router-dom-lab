//MailboxDetails: Shows details about a specific mailbox
//Equivalent to the SHOW page mailboxes/:mailboxId

//As a user, when viewing the details page, I should see details about a specific mailbox.
//The details should include the box number (_id), the name of the boxholder, and the box size.

import { useParams } from 'react-router-dom' //always remember to import useParams from react-router-dom when using it

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
    <div>
      <h2>Mailbox Details</h2>
      <p>ID: {selectedBox._id}</p>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
    )
}

export default MailboxDetails;