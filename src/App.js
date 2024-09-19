import React, { lazy,Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error  from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Cart from "./components/Cart";


//import Grocery from "./components/Grocery";
//Chunking
//Code Splitting
//Dynamic Bundling
//lazy Loading
//on demand loading

const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    const [userName,setUserName] =useState();
    //authentication
    useEffect(()=>{
     //Make an API call and send userName and password
     const data = {
        name :"Tony Stark"
     };
     setUserName(data.name);
    },[]);
   
    return(
         //Provider takes store as prop
        <Provider store={appStore}>  
            <UserContext.Provider value={{loggedInUser: userName ,setUserName}}>
            <div className="app">
            <Header />
            <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
        
    );
};
 
const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
                
            },
            {
                path:"/about",
                element:<About/>,
                
            },
            {
                path:"/contact",
                element:<Contact/>,
                
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
                
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
                
            },
            {
                path:"/cart",
                element:<Cart/>,
                
            },
        ],
        errorElement:<Error/>,
          
    },
    
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);