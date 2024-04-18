import Button from "./Button";
const User = ({user}) => {
    return (
        <div className="flex justify-between items-center border p-2 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors duration-300">
             <div className="text-lg font-mono">{user.firstname} {user.lastname}</div>
             <Button text={"Send Money"}/>
        </div>
      );
}
 
export default User;