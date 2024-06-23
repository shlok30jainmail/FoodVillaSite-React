import { useState, useContext } from "react";
import Logo from "../assets/img/foodvillaIMG.jpeg"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// login logout
const loggedInUser = ()=>{
    //check user authentication
    return true;
}

const Title= ()=>(
    // <h2 className="title" key="h2"> Food Villa </h2>
    <Link to="/">
    {/* <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo"/> */}
    {/* using downloaded img logo */}
    <img data-testid="logo" className="h-20 p-2 m-3" src={Logo} alt="logo"/>

    </Link>
);

// create react component(functional component)
const Header = () =>{
    // using useState we can change login to logout
    const [isloggedInUser, setloggedInUser] = useState(false)
    const {user} = useContext(UserContext);
    const  cartItems = useSelector(store=> store.cart.items); // subscribe our store
    console.log(cartItems);
    return(
        <div className="flex justify-between shadow-lg bg-pink-50 md:flex-row lg:flex-row">
            {console.log("Shlok")}
            <Title/>
             <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/"  className="px-2"><li>Home</li></Link>
                    <Link to="/about"  className="px-2"><li>About</li></Link>
                    <Link to="/contact"  className="px-2"><li>Contact</li></Link>
                    <Link to="/instamarts"  className="px-2"><li>Instamarts</li></Link>
                    <Link to="/Cart"  className="px-2" data-testid="cart"><li>Cart-{cartItems.length}</li></Link>



                    {/* <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li> */}
                </ul>
                 
             </div>

             {/* <span className="p-10 font-bold text-red-900">{user.name}</span> */}
             {/* show logout buuton if they login else login button */}
             {/* {isloggedInUser?
                <button onClick={()=>{
                    setloggedInUser(false)
                }}>Logout</button>
                :<button onClick={()=>{
                    setloggedInUser(true)
                    }}>Login</button>} */}
        </div>
    );
}
export default Header;