import { createContext } from "react";

const UserContext = createContext({
   user:{
     name:"Shlok Jain",
    email:"shlok30jain@gmail.com",
   },
});

// This is good for debugging because profiler(react developer tool) not show context name so use it for showing context name by which we can easily debug
// UserContext.displayName = "UserContext";
export default UserContext;