import { useState } from "react";

const Section =({title, description, isVisible, setIsVisible})=>{
  // const [isVisible, setIsVisible] = useState(false);
  // const [count, setCount] = useState(0);
  return(
    <div className="p-2 m-2 border border-black shadow-lg bg-pink-50 hover:bg-blue-100">
      <h3 className="font-bold">{title}</h3>
      {isVisible===true?   
      <button className="underline cursor-pointer" onClick={()=>{
        setIsVisible()
      }}>Hide</button>
    :   <button className="underline cursor-pointer" onClick={()=>{
        
      setIsVisible()

    }}>show</button>}
      {/* {isVisible===false?<p></p>:<p>{description}</p>} */}
      {isVisible&&<p>{description}</p>} 
    </div>
  )
}

const Instamarts = ()=>{
  // const [sectionConfig, setSectionConfig] = useState({
  //   showAbout:false,
  //   showTeam:false,
  // })
  const [visibleSection, setVisibleSection] = useState("");
    return(
          <div>
            <h1 className="p-2 m-2 text-3xl font-bold text-center">Welcome to All Guys!</h1>
            <Section 
            title={"About"} 
            description={"Welcome to our delightful food haven, a website meticulously crafted by Shlok Kumar Jain, who is passionate about culinary arts and web development. This platform, created as a practice project in React, showcases an array of mouth-watering recipes and culinary tips designed to inspire your cooking journey. Whether you are a seasoned chef or a home cook, you will find a diverse collection of recipes, ranging from quick and easy meals to gourmet dishes. Shlok Kumar Jain, the mastermind behind this site, can be reached at shlok30jain@gmail.com for any inquiries or feedback. Dive into the world of flavors and aromas, and let our site be your companion in the kitchen as you explore and experiment with new recipes. Happy cooking!"}
            isVisible={visibleSection==="about"}
            setIsVisible={()=>{
              if(visibleSection==="about"){
                setVisibleSection("");
              }else{
                setVisibleSection("about");
              }
            }}
            />

            <Section 
            title={"Team Instamarts"} 
            description={"Welcome to Instamart, your one-stop destination for all your grocery needs, brought to you by the dedicated and innovative Instamart Team. Our mission is to revolutionize the way you shop for groceries, making it convenient, fast, and enjoyable. Our team works tirelessly to source the freshest produce, highest quality products, and the best deals to ensure you have a seamless shopping experience. Whether you are looking for daily essentials, exotic ingredients, or household items, Instamart has got you covered. Our customer-centric approach ensures that your satisfaction is our top priority, and we are always here to help with any queries or concerns. Join the Instamart family today and discover the future of grocery shopping!"}
            isVisible={visibleSection==="team"}
            setIsVisible={()=>{
              if(visibleSection==="team"){
                setVisibleSection("");
              }else{
                setVisibleSection("team");
              }
            }}
            />
          </div>

    );
      
    
}

export default Instamarts;