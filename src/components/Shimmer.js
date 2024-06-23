
const Shimmer = () =>{
    return(
        <div className="restraunt-list" data-testid="shimmer-ui">
                {Array(10).fill("").map((e, index)=>(
                <div className="shimmer-card" key={index} ></div>
                 ))};
     </div>

    );
};

export default Shimmer;