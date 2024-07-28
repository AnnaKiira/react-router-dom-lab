//App: The root component that orchestrates the entire application

import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import PageNotFound from './components/PageNotFound/PageNotFound';

/* const initialState = {
  _id: 1,
  boxSize: 'Small',
  boxholder: 'Alex',
}; */


const App = () => {

  const [mailboxes, setMailBoxes] = useState([])

  const addBox = (newMailbox) => { //this function will add a new mailbox to the state - (newMailbox) object is passed into the function
    newMailbox.id = mailboxes.length + 1; //assigning a new _id to the new mailbox. +1 (one new mailbox more than the current length of mailboxes)
    setMailBoxes([...mailboxes, newMailbox]) //updating the mailboxes state with the new mailbox
  }


  return (
    <>
    <h1>MailBoxes</h1>
    <NavBar /> {/* As a user, I should see a nav bar with links at the top of each page in the application */}
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} /> {/* As a user, clicking on the ‘Home’ link should navigate me to a landing page that displays the text ‘Post Office’. */}
      <Route path='/mailboxes' element={<MailboxList />} /> {/* As a user, when viewing the ‘Mailboxes’ list page, I want to be able to click on a mailbox, and be directed to a mailbox details page. */}
      <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>} /> {/* As a user, clicking on the ‘New Mailbox’ link should navigate me to a page with a form for submitting new mailboxes. */}
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} /> {/* As a user, clicking on the ‘Mailboxes’ link should navigate me to a ‘Mailboxes’ page. */}
      <Route path='*' element={<PageNotFound />} /> {/* As a user, I should see the message ‘Mailbox Not Found!’ if I navigate to the details page for a mailbox that does not exist */}
    </Routes>
    </>
  )
};

export default App;

