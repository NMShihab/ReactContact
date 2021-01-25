import Contact from './Contact' 

const Contacts = ({contacts,onDelete,onToggle}) => {
    
    return (
        <>
            {contacts.map((contact)=>(
                <Contact key={contact.id} 
                    contact = {contact} 
                    onDelete = {onDelete} 
                    onToggle ={onToggle}
                />

            ))}

            
        </>
    )
}







export default Contacts

