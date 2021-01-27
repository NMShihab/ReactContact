import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Contact = ({contact, onDelete, onToggle}) => {
    return (
        <div className= {`contact ${contact.reminder ?
            'reminder' : ''}`} onDoubleClick = {() => onToggle(contact.id)}>
            <h3>
                {contact.name}             
                <AiFillDelete 
                    style = {{color : 'red', cursor: 'pointer'}}
                    
                    onClick ={() => onDelete(contact.id)}
                />           
            </h3>
            <p>{contact.phn}</p>
            <p>{contact.email}</p>
            
        </div>
    )
}

export default Contact
