import { useNavigate } from "react-router-dom";

import { Children, createContext,useState } from "react";

export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [isAuth, setIsAuth] =useState(false);
    const [token, setToken] =useState({});
    const navigate = useNavigate();
    const [Users,setusers]=useState([])

    const Login=(data)=>{
     if(Users.length===0){
        alert("Acount dosen't exist Please create acount....")
        navigate("/signup")
     }   
     let bag=false
     for(let i=0;i<Users.length;i++){
        if(Users[i].email===data.email&&Users[i].password===data.password){
            bag=true;
            break;
        }
     } 
     if(bag){
          alert("Login Succsesfull..!")
          setIsAuth(true)
          navigate("/product")
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
  const signup=(data)=>{
   let bag=false
     for(let i=0;i<Users.length;i++){
        if(Users[i].email===data.email){
            bag=true;
            break;
        }
     } 
     if(bag){
          alert("User allrady exist with this email please logn to continew")
          navigate("/login")
     }
     else{
      setusers([...Users,data])
      console.log(Users)
      alert("User registration succsesfull...")
          navigate("/login")
      
     }
   
  }




let value={isAuth,token,Logout,Gotohome,Login,Users,setusers,signup}
return <AuthContext.Provider value={value}>
    {children}
</AuthContext.Provider>




}