import { useEffect, useState } from "react";


const useOnline = ()=>{
  // create state which set online status
  const [isOnline, setIsOnline] = useState(true); // by default value true

  useEffect(()=>{
    // if online
    const handleOnline = ()=>{
        setIsOnline(true);
    }
    const handleOffline = ()=>{
        setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // clean up or remove event after setting setIsonline value
    return ()=>{
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }
    

  },[]);

  return isOnline;
};

export default useOnline;