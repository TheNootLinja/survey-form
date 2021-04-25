function Input({name, label, type}) {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label}</label>
            {type === "text" ? <input name={name} type={type}/> : <textarea></textarea>}
        </div>
    )
}

export default Input;