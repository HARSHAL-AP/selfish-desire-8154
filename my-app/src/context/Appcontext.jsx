import { useNavigate } from "react-router-dom";

import { Children, createContext,useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuth, setIsAuth] =useState(true);
    const [token, setToken] =useState({});
    const navigate = useNavigate();
    const [Users,setusers]=useState([])

    const Login=(a,b)=>{
     if(Users.length===0){
        alert("Acount dosen't exist Please create acount....")
        navigate("/signup")
     }   
     let bag=false
     for(let i=0;i<Users.length;i++){
        if(Users[i].email===a&&Users[i].password===b){
            bag=true;
            break;
        }
     } 
     if(bag){
          alert("Login Succsesfull..!")
          navigate("/")
     }
     else{
        alert("Incorrect Credentials..!")
     }
    }

   const Logout=()=>{
    setIsAuth(false)
   }
  
  const Gotohome=()=>{

   navigate("/")

  }
  




let value={isAuth,token,Logout,Gotohome,Login,Users,setusers}
return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>




}