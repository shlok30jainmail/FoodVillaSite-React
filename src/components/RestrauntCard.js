import { IMG_CDN_URL } from "../Config";


const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId,user})=>{
    // const{name,cuisines,avgRating,cloudinaryImageId} = restaurant;
       return(
           <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
               <img src={IMG_CDN_URL+ cloudinaryImageId} alt="card-img"/>
               <h2 className="text-xl font-bold">{name}</h2>
               {/* <p>{cuisines.join(" ,")}</p> */}
               <h4>{avgRating} stars</h4>
               {/* <h4>{user.email}</h4> */}
           </div>
       );
   };

   export default RestrauntCard;