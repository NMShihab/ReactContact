import React from 'react'
import {useState} from 'react'

const AddContact = ({ onAdd }) => {
    const [name,setName] = useState('')

    const onSubmit =(e) =>{
        e.preventDefault()
        onAdd({ name })
        setName('')
    }
    return (
        <form className ='add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Contact</label>
                <input type="text" placeholder = 'Name'
                value = {name} onChange = {(e)=>setName(e.target.value)}/>

            </div>

            <input type="submit" placeholder = 'Save' className = 'btn btn-block'/>
            
        </form>
    )
}

export default AddContact
