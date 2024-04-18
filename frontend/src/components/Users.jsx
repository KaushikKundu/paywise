import axios from "axios";
import User from "./User"
import { useEffect, useState } from "react";

const Users = () => {
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");
    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/user/bulk?filter='+ filter)
        .then(res => {
            setUsers(res.data.user);
        })
    },[filter]);
    return (
        <div className="flex flex-col gap-4 p-6 w-screen">
            <h1 className="text-lg font-medium">Users</h1>
            <input type="text"  className="border p-2 rounded-md" placeholder="Search users..." />
            <div>
            
                 <User key={1}  />
            
            </div>
        </div>
      );
}
 
export default Users;