import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector(store=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart= ()=>{
        dispatch(clearCart());
    }

    return(
        <div>
            <h1 className="text-3xl text-bold"> Cart- {cartItems.length}</h1>
            <button className="p-2 m-5 bg-green-100" onClick={()=>handleClearCart()}>Clear Cart</button>
            {/* <FoodItems {...cartItems[0]}/> */}
            <div className="flex flex-wrap">
            {cartItems.map(item=> <FoodItems key={item.id} {...item}/>)}
            </div>
        </div>
    );
};

export default Cart;