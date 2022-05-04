import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../feature/user";

const Login = () => {
    const [user,setUser] = useState({name:"",age:0,email:""})
    const GlobalUser = useSelector((state) => state?.user?.value)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if(GlobalUser?.name){
            dispatch(logout())
        }
        else{
            dispatch(login(user))
        }
        
    }
  return (
    <div style={{width:"100vw"}}>
      <div style = {{display:"flex",flexDirection:"column",width:200,alignItems:"center",justifyContent:"center",width:"100vw"}}>
        <form style = {{display:"flex",flexDirection:"column",width:200,alignItems:"center",justifyContent:"center",gap :10}}>
          <input type="text" placeholder="Name" onChange={(e) => setUser((user) => ({...user,name:e.target.value}))}/>
          <input type="number" placeholder="Age" onChange={(e) => setUser((user) => ({...user,age:e.target.value}))}></input>
          <input type="text" placeholder="Email" onChange={(e) => setUser((user) => ({...user,mail:e.target.value}))}></input>
        </form>
      </div>
      <button style = {{marginTop:20}} onClick = {handleSubmit}>{GlobalUser?.name ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Login;
