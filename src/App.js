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
  const deleteContact = (id) =>{
    setContacts(contacts.filter((contact)=> contact.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setContacts(contacts.map((contact) => contact.id === id
                ? {...contact,reminder: !contact.reminder }: contact
                  )
                )
   


  }

  return (
    <div className="container">
      <Header />
      {contacts.length >0 ?
      ( <Contacts contacts = {contacts} onDelete = {deleteContact} onToggle = {toggleReminder}/>)  
      :(
        'No Contact here'
      )}
      
      
    </div>
  );
}

export default App;
