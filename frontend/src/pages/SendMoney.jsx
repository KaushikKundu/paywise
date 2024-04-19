import { useLocation } from "react-router-dom";
const SendMoney = () => {
    const location = useLocation();
    const {state} = location;
    const {user} = state.user;
    console.log(state);
    return ( 
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-col gap-5 bg-white p-6 rounded-md shadow-md">
            <div className="text-2xl font-semibold mb-2">{user.firstname}</div>
            <div className="text-lg ">Amount (in Rs)</div>
            <input type="text" className="border p-2 solid rounded-md " placeholder="Enter amount" />
            <button className="bg-green-400 py-2 w-full rounded-md font-medium hover:bg-opacity-75 ">Initiate Transfer</button>
            </div>
        </div>
     );
}
 
export default SendMoney;