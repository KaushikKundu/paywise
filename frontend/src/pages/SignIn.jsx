import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center bg-black">
        <div className="flex flex-col items-center justify-center py-4 px-1 h-fit bg-white w-80 mx-auto rounded-md gap-3 font-mono">
          <Heading text={"Sign In"} />
          <Subheading text={"Enter your credentials to access the account"} />
          <div className="flex flex-col gap-2">
           
            <InputBox label="Email" placeholder="Enter your email address" 
            onChange={e => setUsername(e.target.value)}/>
            <InputBox label="Password" 
            onChange={e => setPassword(e.target.value)}/>
            <Button text="Sign Up" 
            onClick={handleSignup} />
            <BottomWarning
              text="Don't have an account?"
              link=" Sign Up"
              to={"/signup"}
            />
          </div>
        </div>
      </div>
     );
}
 
export default SignIn;