import {useRouteError} from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    // we also destructure it
    // const [ status, statusText] = useRouteError();
    console.log(err);
return(
    <div>
        <h1>Oops !</h1>
        <h2>Something went wrong !!</h2>
        <p>This page is not availabe and <b className="text-red">{err.data}</b></p>
        <p>Error Status : <b className="text-red">{err.status} or {err.statusText} </b></p>
    </div>
);
};

export default Error;