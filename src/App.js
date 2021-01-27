import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import Footer from './components/Footer'
import About from './components/About';
import {useState, useEffect} from 'react'

const App = () => {
  const [showAddContact, setShowAddContact] = useState(false)
  const [contacts, setContacts] = useState([]) 

  useEffect(() => {
    const getContacts = async () =>{
      const contactFromServer = await fetchContact()
      setContacts(contactFromServer)
    }
    
    getContacts()
  },[])

  // Fetch Contacts
  const fetchContact = async () =>{
      const res = await fetch('http://127.0.0.1:1234/contacts')
      const data = await res.json()

      return data
    }

// Add Contact
  const addContact = async (contact) => {
    // const id = Math.floor(Math.random() * 1000 + 1 )
    // const newContact = {id,...contact}
    // setContacts([...contacts,newContact])
    const res = await fetch('http://127.0.0.1:1234/contacts',{
      method : 'POST',
      headers :{
        'Content-type':'application/json',
      },
      body : JSON.stringify(contact),     
    })
    
    
    const data = await res.json()
    setContacts([...contacts,data])
    
    
  }

// DELETE CONTACT
  const deleteContact = async (id) =>{
    await fetch(`http://localhost:1234/contacts/`+id,{
      method : 'DELETE',

    })
    console.log(id)
    setContacts(contacts.filter((contact) => contact.id !== id))
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
    <Router>
      <div className="container">
        <Header onAdd = {() => setShowAddContact(!showAddContact)}
            showAdd = {showAddContact}/>
        

        <Route path ='/' exact render = {(props)=>(
          <>
            {showAddContact && <AddContact onAdd = { addContact }/>}
            {contacts.length >0 ?
            ( <Contacts contacts = {contacts} onDelete = {deleteContact} onToggle = {toggleReminder}/>)  
            :(
            'No Contact here'
        )}

          </>
        )
        
        } />

        <Route path = '/about' component = {About} />

        <Footer />
        
        
      </div>
    </Router>
  );
}

export default App;
