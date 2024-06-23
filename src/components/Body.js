import { restrauntList } from "../Config";
import { rlist } from "../Config";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import {useParams} from "react-router-dom";
import UserContext from "../utils/UserContext";

function filterData(searchText, restaurants){
    // console.log(searchText);
    // console.log(restaurants)

    const filterData = restaurants.filter((restaurant)=>{
        return restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
    return filterData;
}

const Body = ()=>{
    // create useState hook -> react local state variable
    const [searchText, setSearchText] = useState("");
    const [Filterrestaurants, FiltersetRestaurants]= useState(rlist);
    // const [restaurants, setRestaurants]= useState(restrauntList);
    const [allrestaurants, allsetRestaurants]= useState(rlist);

    const {user, setUser} = useContext(UserContext);


    // useEffect with empty dependency which show it can't depend any one and it will only one time after render all thing
    useEffect(()=>{
      getRestraunts();
    }, []);

    // use async function because we fetch the data at here 
    //  async function getRestraunts(){
    //   // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //   // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    //   // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");


    //   // const json = await data.json();
    //   // use optional chaining at here if data is not at here so it breaks so we used it
    //   // setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   // allsetRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   // allsetRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //   // FiltersetRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    //   // when api does not work then use random data
    //   allsetRestaurants(rlist);
    //   FiltersetRestaurants(rlist);
    //   // allsetRestaurants(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle);

    //   // FiltersetRestaurants(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle);


    //   // console.log(json);
    //  }

    async function getRestraunts(){
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57350&lng=77.32080&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      // use optional chaining at here if data is not at here so it breaks so we used it
      // setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      allsetRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      FiltersetRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


      console.log(json);
     }



     // online or offline feature
     const offline = useOnline(); // this is our custom/self build hook
     
     if(!offline){
      return <h1>You are offline 🤔 so check your internet</h1>
     }
     // not rendering componenet (Early return)
     if(!allrestaurants) return null;
     // Conditional rendering
     // if resturant data === 0 so used shimmer ui 
     // else used actual data ui
    return(allrestaurants?.length===0)?<Shimmer/>:(
     <>
      <div className="p-5 my-5 search-container bg-pink-50">
          <input type="text" 
          placeholder="search" 
          data-testid="search"
          value={searchText} 
          className="p-2 m-2 focus:bg-green-200"
          onChange ={(e)=>{
            setSearchText(e.target.value);
            {console.log(e.target.value)}
          }}
          /> 
          <button type="button" className="p-1 m-2 text-white bg-purple-900 rounded-md hover:bg-purple-300" 
          data-testid="search-btn"
           onClick={()=>{
            const data = filterData(searchText, allrestaurants);
            // if(searchText !=""){
                FiltersetRestaurants(data);
            // }if(searchText==""){
            //     setRestaurants(restrauntList);
            // }
            
          }}>Search</button>

          <input value={user.name} onChange={(e)=>{
            setUser({
              name:e.target.value,
             email:"shlok30jain@gmail.com",
         })
          }}/>

          {/* <h1>{searchClick}</h1> */}


      </div>
        <div className="flex flex-wrap restraunt-list" data-testid="res-list">
       {
        Filterrestaurants.map((restaurant)=>{
            return  <Link to ={"restraunt/" + restaurant.info.id}> <RestrauntCard {...restaurant.info} key ={restaurant.info.id}/></Link>
            // return  <Link to ={"restraunt/" + restaurant.id}> <RestrauntCard {...restaurant} key ={restaurant.id}/></Link>

        })
       }     
     </div>
     </>
    );
    };

    export default Body;