import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = async() => {
  const res = await axios.post("http://localhost:3000/api/v1/user/signup",{
    username,
    password
  });
  localStorage.setItem("token",res.data.token) ;
  navigate('/dashboard')
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center py-4 px-1 h-fit bg-white w-80 mx-auto rounded-md gap-3 font-mono">
        <Heading text={"Sign In"} />
        <Subheading text={"Enter your credentials to access the account"} />
        <div className="flex flex-col gap-2">
          <InputBox
            label="Email"
            placeholder="Enter your email address"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text="Sign Up" onClick={handleSignin} />
          <BottomWarning
            text="Don't have an account?"
            link=" Sign Up"
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
