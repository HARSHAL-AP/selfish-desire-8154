import {Link} from "react-router-dom"



function Navbar(){

return (
    <><button><Link to="/aboute">Aboute</Link></button>
    <button><Link to="/login">Login</Link></button>

    <button><Link to="/signup">Signup</Link></button>
    <button><Link to="/product">Product</Link></button>
    <button><Link to="/">Home</Link></button></>
    
)



}
export default Navbar