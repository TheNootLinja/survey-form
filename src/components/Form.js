import { useState } from 'react';

import '../styles/Form.css'
import Button from './Button';
import Input from './Input';


function Form() {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const handleClick = () => {
        console.log('CLICKED!')
    }
    const handleChange = (e) => {
        setComment(e.target.value);
        console.log(comment);
    };
    return (
        <form>
            <Input name='fname' label='First Name' type='text' phText='Whats your first name?'/>
            <Input name='lname' label='Last Name' type='text' phText='Whats your last name?'/>
            <Input name='email' label='Email' type='text' phText='Whats your first email?'/>
            <Input name='comment' label='Comment' type='textarea' phText='What did you think of the service?' changeHandler={handleChange}/>
            <Button btext='submit' clickHandler={handleClick}/>
            <p>{comment}</p>
        </form>
    )
}

export default Form;