import Contact from './Contact' 

const Contacts = ({contacts,onDelete}) => {
    
    return (
        <>
            {contacts.map((contact)=>(
                <Contact key={contact.id} contact = {contact} onDelete = {onDelete}/>

            ))}

            
        </>
    )
}







export default Contacts

