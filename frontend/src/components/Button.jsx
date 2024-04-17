const Button = ({text,onClick}) => {
    return (
        <div>
            <button className="w-full py-2 bg-black text-white border rounded-md hover:bg-gray-800 transition-colors duration-300"
            onClick={onClick}>
                {text}
            </button>
        </div>
      );
}
 
export default Button;