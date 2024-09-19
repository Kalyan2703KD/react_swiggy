import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext"

class About extends React.Component{
    constructor(props){
        super(props);
//console.log("Parent Constructor");
    };
componentDidMount(){
   // console.log("Parent ComoponentDidMount");
}
    render(){
       // console.log("Parent Render");
        return(
            <div>
                <UserContext.Consumer>
                    {({loggedInUser})=>(
                        <h1 className="text-xl font-bold">{loggedInUser}</h1>
                    )}
                </UserContext.Consumer>
                <h1>About Class Component</h1>
                <UserClass name={"Kalyan"} location={"Goa"} />
            </div>
        )
    }
  
};
export default About;