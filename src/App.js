import './App.css';
import Header from './components/Header'
import Contacts from './components/Contacts'
import {useState} from 'react'

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name :' N. M. Shihab Islam',

    },
    {
      id: 2,
      name :' N. M. Shihab Islam',

    },
    {
      id: 3,
      name :' N. M. Shihab Islam',

    }
  ]) 
// DELETE CONTACT


  return (
    <div className="container">
      <Header />
      <Contacts contacts = {contacts}/>
      
      
    </div>
  );
}

export default App;
