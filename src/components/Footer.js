import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = ()=>{
    const {user} = useContext(UserContext);
    return(
        <div>
            <p className="text-center">This site is created by {user.name} and his email is {user.email}</p>;
        </div>
    )
};

export default Footer;