import ResCard from './ResCard';
import {useState,useEffect, useContext} from "react";
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from '../utils/UserContext';
const Body=()=>{
    const [listOfRes,setListOfRes] =useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
   
useEffect(()=>{
    fetchData();
},[]);

const fetchData = async()=>{
    const data = await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRes(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle?.restaurants);
};
const onlineStatus = useOnlineStatus();
if(onlineStatus === false)
    return(
<h1>
    Look like you're offline!! please check your internet connection;
</h1>
    );

    const {loggedInUser,setUserName} =useContext(UserContext);

    return listOfRes.length===0?<Shimmer />:(
        <div className="body">
            <div className='filter flex'>
                <div className='search m-4 p-4 '>
                    <input 
                     type='text'
                      className='border border-solid border-black' 
                      value={searchText}
                      onChange={(e) => {
                         setSearchText(e.target.value);
                       }}
                    />
                    <button className='px-4 py-1 bg-green-100 m-4 rounded-lg'
                    onClick={()=>{
                        const filteredRestaurant= listOfRes.filter((rest)=>
                            rest.info.name.toUpperCase().includes(searchText.toUpperCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                <button className='px-4 py-1 bg-gray-100 m-4 rounded-lg'
                   onClick={()=>{
                       const filteredList=listOfRes.filter(
                         (res)=>res.info.avgRating>4.2
                      );
                      setFilteredRestaurant(filteredList);
                    }}
                 >Top Rated Restaurents</button>
                </div>
                <div className='search m-4 p-4 flex items-center'>
                    <label className='px-2'> UserName : </label>
                <input 
                className='border border-black p-2' value={loggedInUser}
                onChange={(e)=>setUserName(e.target.value)}
                />
                </div>
           
            </div>
            
            <div className='flex flex-wrap'>
                {filteredRestaurant.map((res)=>(
                    <Link key={res.info.id} to={"/restaurant/"+res.info.id}><ResCard  Data={res} /></Link>
                ))}
            
            </div>
            
        </div>
    )
};
export default Body;