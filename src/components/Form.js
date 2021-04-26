import '../styles/Form.css'
import Button from './Button';
import Input from './Input'

function Form() {
    const handleClick = () => {
        console.log('CLICKED!!!')
    }
    return (
        <>
            <Input name='fname' label='First Name' type='text'/>
            <Input name='lname' label='Last Name' type='text'/>
            <Input name='email' label='Email' type='text'/>
            <Input name='comment' label='Comment' type='textarea'/>
            <Button btext='submit' clickHandler={handleClick}/>
        </>
    )
}

export default Form;