function Input({name, label, type, phText, changeHandler}) {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            {type === "text" ? <input name={name} type={type} placeholder={phText}/> : <textarea placeholder={phText} onChange={changeHandler}></textarea>}
        </div>
    )
}

export default Input;