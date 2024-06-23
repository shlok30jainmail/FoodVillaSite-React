import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Config";


const FoodItems = ({name,cuisines,avgRating,cloudinaryImageId,user})=>{
    const dispatch = useDispatch();
    const handleRemoveItem = ()=>{
        dispatch(removeItems(item))
    }
    // const{name,cuisines,avgRating,cloudinaryImageId} = restaurant;
       return(
           <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
               <img src={IMG_CDN_URL+ cloudinaryImageId} alt="card-img"/>
               <h2 className="text-xl font-bold">{name}</h2>
               {/* <p>{cuisines.join(" ,")}</p> */}
               <h4>{avgRating} stars</h4>
               {/* <h4>{user.email}</h4> */}
               <button className="p-2 m-3 bg-green-100" onClick={()=>handleRemoveItem(item)}>Remove item</button>
           </div>
       );
   };

   export default FoodItems;