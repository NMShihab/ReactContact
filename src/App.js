import './App.css';
import Header from './components/Header'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import {useState} from 'react'

const App = () => {
  const [showAddContact, setShowAddContact] = useState(false)
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

// Add Contact
  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 1000 + 1 )

    const newContact = {id,...contact}

    setContacts([...contacts,newContact])
    
  }

// DELETE CONTACT
  const deleteContact = (id) =>{
    setContacts(contacts.filter((contact)=>
     contact.id !== id
      )    
    )
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setContacts(contacts.map((contact) =>
      contact.id === id ? {...contact, reminder: 
        !contact.reminder }: contact      
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddContact(!showAddContact)}/>
      {showAddContact && <AddContact onAdd = { addContact }/>}
      {contacts.length >0 ?
      ( <Contacts contacts = {contacts} onDelete = {deleteContact} onToggle = {toggleReminder}/>)  
      :(
        'No Contact here'
      )}
      
      
    </div>
  );
}

export default App;
