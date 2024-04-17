const Navbar = ({header,user}) => {
    return (
        <div className="flex justify-between text-xl font-medium bg-gray-100 p-4">
            <div className="">{header}</div>
            <div className="">{user}</div>
        </div>    
    );
}
 
export default Navbar;
