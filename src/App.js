import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL} from "./Config";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestrauntMenu from "./components/RestruantMenu.js"
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import store from "./utils/store.js";
import { Provider } from "react-redux";
// import UserContext from "./utils/UserContext.js";
import UserContext from "./utils/UserContext.js";
// import Instamarts from "./components/Instamarts.js";
// or dynamic importing instamart
const Instamarts = lazy(()=> import("./components/Instamarts.js"));


const heading1 = React.createElement(
    "h1",
    {
        className:"title",
        key:"h1"
    },
    "Heading 1"
    );

// const heading2 = React.createElement(
//     "h2",
//     {
//         className:"title",
//         key:"h2"
//     },
//     "Heading 2"
//     );




// const burgerKing = {
//     name:"India Plate",
//     image: "https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2019/08/1280-Indian-food.jpg",
//     cusiness: ["India", "Delhi"],
//     rating : "4.3"
// }




    // 1st way
// const RestrauntCard = (props)=>{

//     return(
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ props.restaurant.cloudinaryImageId} alt="card-img"/>
//             <h2>{props.restaurant?.name}</h2>
//             <h3>{props.restaurant.cuisines.join(" ,")}</h3>
//             <h4>{props.restaurant.avgRating} stars</h4>
//         </div>
//     );
// };

//2nd way
// obj destructuring 
// const RestrauntCard = ({restaurant})=>{
//  const{name,cuisines,avgRating,cloudinaryImageId} = restaurant;
//     return(
//         <div className="card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} alt="card-img"/>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(" ,")}</h3>
//             <h4>{avgRating} stars</h4>
//         </div>
//     );
// };

// const Body = ()=>{
//   return(
//    <div className="restraunt-list">
//        <RestrauntCard  restaurant = {restrauntList[0]}/>
//        <RestrauntCard  restaurant = {restrauntList[1]}/>
//        <RestrauntCard  restaurant = {restrauntList[2]}/>
//        <RestrauntCard  restaurant = {restrauntList[3]}/>
//        <RestrauntCard  restaurant = {restrauntList[2]}/>
//        <RestrauntCard  restaurant = {restrauntList[3]}/>
//        {/* <RestrauntCard/> */}
//    </div>
//   );
//   };


// 3rd way 

// const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId})=>{
//     // const{name,cuisines,avgRating,cloudinaryImageId} = restaurant;
//        return(
//            <div className="card">
//                <img src={IMG_CDN_URL+ cloudinaryImageId} alt="card-img"/>
//                <h2>{name}</h2>
//                <h3>{cuisines.join(" ,")}</h3>
//                <h4>{avgRating} stars</h4>
//            </div>
//        );
//    };
   
//    const Body = ()=>{
//      return(
//       <div className="restraunt-list">
//           <RestrauntCard  {...restrauntList[0]}/>
//           <RestrauntCard   {...restrauntList[1]}/>
//           <RestrauntCard  {...restrauntList[2]}/>
//           <RestrauntCard  {...restrauntList[3]}/>
//           <RestrauntCard   {...restrauntList[2]}/>
//           <RestrauntCard   {...restrauntList[3]}/>
//           {/* <RestrauntCard/> */}
//       </div>
//      );
//      };

// now doing above work using map
// const Body = ()=>{
//     return(
//      <div className="restraunt-list">
//        {
//         restrauntList.map((restraunt)=>{
//             return <RestrauntCard {...restraunt}/>
//         })
//        }        
//      </div>
//     );
//     };

// const Footer = ()=>{
//     return <h4>Footer</h4>;
// };
// const container = React.createElement("div",{id:"container"},[heading1,heading2]);

const AppLayout = ()=>{
    const [user, setUser] = useState({
          name:"Shlok",
         email:"shlok30jain@gmail.com",
     });
    return(
        <Provider store={store}>
        <UserContext.Provider
         value={
            {user:user,
             setUser:setUser,   
            }
            }>
            <Header/>
            {/* <Body/> */}
            <Outlet/>
            <Footer/>
        </UserContext.Provider>
        </Provider>
    );

}

// create router configuration - it is array of list of the path

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body user={{
                    name:"Shlok",
                    email:"shlok30jain@gmail.com"
                }}/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[{
                    path:"profile",
                    element:<Profile/>
                }]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/instamarts",
                element:(
                    <Suspense fallback={<Shimmer/>}>
                        <Instamarts/>
                    </Suspense>
                ),
            },
            {
                path:"/restraunt/:id",
                element:<RestrauntMenu/>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react elements inside the root (render react element)
// root.render(container);

// render react compenent
// root.render(<AppLayout/>);


// now we render according to our router provider which router we have we show that page
root.render(<RouterProvider router={appRouter}/>);


