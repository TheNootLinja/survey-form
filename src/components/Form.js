import { useState } from 'react';

import '../styles/Form.css'
import Button from './Button';
import Input from './Input';


function Form() {
    // TODO: Change over state below to using a reducer so that we can
    // TODO: have a single state and hook so we don't have to have a
    // TODO: separate set function for each.
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [service, setService] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const formStateObject = {
            fName,
            lName,
            email,
            service,
            comment,
        }
        console.log(formStateObject);
    }
    const fNameChange = (e) => {
        setFName(e.target.value);
    };
    const lNameChange = (e) => {
        setLName(e.target.value);
    };
    const emailChange = (e) => {
        setEmail(e.target.value);
    };
    const serviceChange  = (e) => {
        setService(e.target.value);
    };
    const commentChange = (e) => {
        setComment(e.target.value);
    };
    return (
        <form>
            <Input 
            name='fname' 
            label='First Name' 
            type='text' 
            phText='Whats your first name?'
            changeHandler={fNameChange}
            />
            <Input 
            name='lname' 
            label='Last Name' 
            type='text' 
            phText='Whats your last name?'
            changeHandler={lNameChange}
            />
            <Input 
            name='email' 
            label='Email' 
            type='text' 
            phText='Whats your first email?'
            changeHandler={emailChange}
            />
            <label htmlFor="service-used">Service Used</label>
            <select name="service-used" id="dropdown" onChange={serviceChange}>
                <option value="New Vehicle Sale">New Vehicle Sale</option>
                <option value="Used Vehicle Sale">Used Vehicle Sale</option>
                <option value="Vehicle Trade-In">Vehicle Trade-In</option>
                <option value="Vehicle Refinance">Vehicle Refinance</option>
            </select>

            <Input 
            name='comment' 
            label='Comment' 
            type='textarea' 
            phText='What did you think of the service?' 
            changeHandler={commentChange}
            />
            <Button btext='submit' clickHandler={handleSubmit}/>
            <p></p>
            <p></p>
        </form>
    )
}

export default Form;