import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Config";
const useRestaurant = (id)=>{
    const [restraunt, setRestraunt] = useState(null);
    useEffect(()=>{
        getRestaurantInfo();
    },[]);


    async function getRestaurantInfo(){
        console.log("Hi I am Shlok");
        // console.log(menuItems);
        // const data =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.57350&lng=77.32080&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`);
        const data =  await fetch(FETCH_MENU_URL+id); // readable as compare above line

        const json = await data.json();
        console.log(json);
        setRestraunt(json);

    } 

    return restraunt;
}

export default useRestaurant;