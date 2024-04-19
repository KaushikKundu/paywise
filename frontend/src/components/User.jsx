import Button from "./Button";
import { useNavigate } from "react-router-dom";
const User = ({user}) => {
  const navigate = useNavigate();
  const handleSendMoney = () => {
    navigate('/send', { state: { user } });
  }
    return (
        <div className="flex justify-between items-center border p-2 rounded-md bg-zinc-100 hover:bg-zinc-200 transition-colors duration-300">
             <div className="text-lg font-mono">{user.firstname} {user.lastname}</div>
             <Button text={"Send Money"}
             onClick={handleSendMoney}/>
        </div>
      );
}
 
export default User;