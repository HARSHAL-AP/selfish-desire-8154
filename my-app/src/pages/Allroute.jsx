import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import About from "./Aboute"
import Product from "./Product"
import Signup from "./Signup"



function Allroute(){

return (
<div>
<Routes>
<Route path={"/"} element={<Home/>}></Route>
<Route path={"/about"} element={<About/>}></Route>
<Route path={"/product"} element={<Product/>}></Route>
<Route path={"/Login"} element={<Login/>}></Route>
<Route path={"/signup"} element={<Signup/>}></Route>
</Routes>



</div>




)



}


export default Allroute