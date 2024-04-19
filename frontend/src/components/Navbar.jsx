import {useNavigate}    from "react-router-dom"
const Navbar = ({header,user}) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between text-xl font-medium bg-gray-100 p-4">
            <div className="">{header}</div>
            <div className="flex gap-4 font-normal">
            <span className="text-lg text-slate-700 hover:font-medium cursor-pointer"
            onClick={() => navigate('/signup')}
            >Add another account</span>
            <span >{user}</span>
            </div>
        </div>    
    );
}
 
export default Navbar;
