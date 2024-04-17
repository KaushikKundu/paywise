const BottomWarming = ({text,link,to}) => {
    return ( 
        
        <p className="font-medium text-sm">{text}
        <a href={to}>{link}</a>
        </p>
     );
}
 
export default BottomWarming;