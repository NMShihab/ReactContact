import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Contact = ({contact, onDelete}) => {
    return (
        <div className= 'contact'>
            <h3>
                {contact.name} 
                <AiFillDelete 
                    style = {{color : 'red', cursor: 'pointer'}}
                    
                    onClick ={() => onDelete(contact.id)}
                />
            
            </h3>
            
        </div>
    )
}

export default Contact
