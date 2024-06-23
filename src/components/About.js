// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
const About = ()=>{
    return(
        <>
        {/* <Header/> */}
        <div>
            <h3 className="p-3 m-2 text-3xl font-bold text-center">This is a About Page - Owner - Shlok Jain</h3>
            {/* <Outlet/> */}
            <Profile  name={"Shlok"} age={22}/>
        </div>
        </>

    );
}

export default About;