import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
      username,
      password,
      firstname,
      lastname
    });
    localStorage.setItem("token" ,res.data.token)
    navigate("/dashboard");
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center py-4 px-1 h-fit bg-white w-80 mx-auto rounded-md gap-3 font-mono">
        <Heading text="Sign Up" />
        <Subheading text="Enter your information to create the account" />
        <div className="flex flex-col gap-2">
          <InputBox label="First Name" placeholder="Enter your first name" 
          onChange={e => setFirstname(e.target.value)
          }
          />
          <InputBox label="Last Name" placeholder="Enter your last name"
          onChange={e => setLastname(e.target.value)}/>
          <InputBox label="Email" placeholder="Enter your email address" 
          onChange={e => setUsername(e.target.value)}/>
          <InputBox label="Password" 
          onChange={e => setPassword(e.target.value)}/>
          <Button text="Sign Up" 
          onClick={handleSignup} />
          <BottomWarning
            text="Already have an account?"
            link=" Sign In"
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
