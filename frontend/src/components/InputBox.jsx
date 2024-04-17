const InputBox = ({label,placeholder,onChange}) => {
    return (  
        <div>
            <div className="text-md text-left">{label}</div>
            <input type="text" placeholder={placeholder} onChange={onChange}
            className="p-1 text-sm border rounded-md w-full"/>
        </div>
    );
}
 
export default InputBox;