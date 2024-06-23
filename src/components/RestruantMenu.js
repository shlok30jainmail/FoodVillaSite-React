import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../Config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const RestrauntMenu = ()=>{
    const {id}= useParams();

    // create own hook
    const  restraunt = useRestaurant(id)

    const dispatch = useDispatch();
   const handleAllItems = (item)=>{
      dispatch(addItems(item));
     };
    // const [restraunt, setRestraunt] = useState(null);

    // useEffect(()=>{
    //     getRestaurantInfo();
    // },[]);


    // async function getRestaurantInfo(){
    //     console.log("Hi I am Shlok");
    //     // console.log(menuItems);
    //     const data =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57350&lng=77.32080&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
    //     const json = await data.json();
    //     console.log(json);
    //     setRestraunt(json);

    // } 
    


    return(!restraunt) ? <Shimmer/> :(
        <div  className="flex flex-col">
 
      <div className="p-2 m-2 shadow-lg bg-gray-50 w-60">
            <img src={IMG_CDN_URL + restraunt?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt="restru-img" />
            <h1 className="font-bold text-blue-900">Restruant id: {restraunt?.data?.cards[2]?.card?.card?.info?.id}</h1>
            <h2 className="font-bold">{restraunt?.data?.cards[2]?.card?.card?.info?.name}</h2>
            {/* <img src={IMG_CDN_URL + restraunt?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt="" /> */}
            <h3>{restraunt?.data?.cards[2]?.card?.card?.info?.area}</h3>
            <h3>{restraunt?.data?.cards[2]?.card?.card?.info?.city}</h3>
            <h3>{restraunt?.data?.cards[2]?.card?.card?.info?.avgRating}</h3>
            <h3 className="font-bold text-green-900">{restraunt?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>{restraunt?.data?.cards[2]?.card?.card?.info?.slugString}</h3>

      </div>

         <div>
            <button className="p-3 m-3 bg-green-400 hover:bg-green-100" onClick={()=> handleAllItems(restraunt?.data?.cards[2]?.card?.card?.info)}> Add items</button>
           </div>



        </div>
    );
};

export default RestrauntMenu;