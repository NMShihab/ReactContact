import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

const Contact = ({contact}) => {
    return (
        <div className= 'contact'>
            <h3>
                {contact.name} 
                <AiFillDelete 
                    style = {{color : 'red', cursor: 'pointer'}}
                />
            
            </h3>
            
        </div>
    )
}

export default Contact
