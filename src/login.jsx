import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
const handlePassword=(e)=>{
    setPassword(e.target.value)
}
  const handleSubmit = () => {
    if (userName === "" || userName.length == 0) {
      alert("email required");
      return
    }
    if (password === "" || password.length == 0) {
      alert("Password required");
      return
    }
    navigate('/Home')
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <p>User Name</p>
        <input type="text" value={userName}  onChange={handleUserName} />
        <p>Password</p>
        <input  onChange={handlePassword} />
      </div>
      <button style={{ marginTop: 30 }} onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};
export default Login;
