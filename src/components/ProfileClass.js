import React from "react";

class Profile extends React.Component {
    // creating state using constructor
    constructor(props){
        super(props);
        // create state
        this.state={
            count:0,   // defauly value 0
            userInfo: {
                name: "xyz",
                location: "xyz",
                avatar_url: "my image",
                public_repos: "0",
                login:"login-name",

            },
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/shlok30jainmail");
        const json = await data.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
        
    }
    render(){
        // if we want to destructe this.state object os we also do
        const{count} = this.state;
        return(
            <div className="flex flex-wrap items-center justify-center m-2">
                {/* <h1>Hi, This is My Profile Section</h1> */}
                
                <div className="flex flex-wrap items-center justify-center gap-3 border rounded shadow-lg bg-gray-50 ">
                <img src={this.state.userInfo.avatar_url} alt="profile-img"  className="w-56 m-3 rounded"/>
              
              <div className="p-3 m-2">
              <h3 className="font-bold">Name : {this.state.userInfo.name}</h3>
              <h3 className="font-bold text-gray-400">GitHub username : {this.state.userInfo.login}</h3>
              <h3 className="font-bold text-gray-400">GitHub Repo : {this.state.userInfo.public_repos}</h3>
                <h3 className="font-bold text-gray-400">Location : {this.state.userInfo.location}</h3>
                <h3 className="font-bold text-gray-400">Age : {this.props.age}</h3>
                <h3 className="font-bold text-gray-400">Rating : {count}</h3>

                {/* <h3>count : {this.state.count}</h3> */}
                {/* after destructuring we write it */}
                <button className="p-1 mt-2 bg-green-400 rounded hover:bg-green-100" onClick={()=>{
                    this.setState({
                        count:count+1,
                    });
                }}> Give Rating</button>
              </div>


                </div>

            </div>
        )
    }
}

export default Profile;