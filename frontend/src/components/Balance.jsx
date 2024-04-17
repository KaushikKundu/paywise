const Balance = ({balance}) => {
    return ( 
        <div className="flex items-center gap-2 font-medium text-lg p-5">
            <p>Your Balance is </p>
            <span className="font-semibold">Rs {balance}</span>
        </div>
     );
}
 
export default Balance;