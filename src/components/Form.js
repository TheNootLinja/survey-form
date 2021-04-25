import Input from './Input'

function Form() {
    return (
        <>
            <Input name='fname' label='First Name' type='text'/>
            <Input name='lname' label='Last Name' type='text'/>
            <Input name='email' label='Email' type='text'/>
            <Input name='comment' label='Comment' type='textarea'/>
        </>
    )
}

export default Form;