import Contact from './Contact' 

const Contacts = ({contacts}) => {
    
    return (
        <>
            {contacts.map((contact)=>(
                <Contact key={contact.id} contact = {contact}/>

            ))}

            
        </>
    )
}







export default Contacts

