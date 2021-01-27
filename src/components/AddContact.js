import React from 'react'
import {useState} from 'react'

const AddContact = ({ onAdd }) => {
    const [name,setName] = useState('')
    const [phn,setPhn] = useState('')
    const [email,setEmail] = useState('')

    const onSubmit =(e) =>{
        e.preventDefault()
        onAdd({ name,phn,email })
        setName('')
        setPhn('')
        setEmail('')
    }
    return (
        <form className ='add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Contact</label>
                <input type="text" placeholder = 'Name'
                value = {name} onChange = {(e)=>setName(e.target.value)}/>

            </div>
            <div className = 'form-control'>
                <label>Phone Number</label>
                <input type="text" placeholder = 'Phn'
                value = {phn} onChange = {(e)=>setPhn(e.target.value)}/>

            </div>
             <div className = 'form-control'>
                <label>Email</label>
                <input type="email" placeholder = 'Email'
                value = {email} onChange = {(e)=>setEmail(e.target.value)}/>

            </div>

            <input type="submit" placeholder = "Save" className = 'btn btn-block'/>
            
        </form>
    )
}

export default AddContact
