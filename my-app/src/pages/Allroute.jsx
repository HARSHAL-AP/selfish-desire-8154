import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./signup" 
import Aboute from "./About"


function Allroute(){

return (
<Routes>

<Route path="/" element={<Home/>} ></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/signup" element={<Signup/>}></Route>
<Route path="/aboute" element={<Aboute/>}></Route>






</Routes>




)



}
export default Allroute