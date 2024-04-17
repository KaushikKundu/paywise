import Navbar from "../components/Navbar"
import Balance from "../components/Balance"
import Users from "../components/Users";

const Dashboard = () => {
    return ( 
        
        <div>
            <Navbar header={"PayWise"} user={"John Doe"} />
            <Balance balance={10000}/>
            <Users/>
        </div>
     );
}
 
export default Dashboard;