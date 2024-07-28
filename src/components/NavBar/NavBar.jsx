//NavBar: Provides navigation links
import {Link} from 'react-router-dom' //Always remember to npm i react-router-dom first before importing!

const NavBar = () => {
    
    return (
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/mailboxes'>Mailboxes</Link>
            </li>
            <li>
              <Link to='/new-mailbox'>New Mailbox</Link>
            </li>
          </ul>
        </nav>
      );
}

export default NavBar
