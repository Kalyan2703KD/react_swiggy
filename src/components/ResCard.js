import { CDN_URL } from "../utils/constants"

const ResCard=({Data})=>{
   
    const {name,areaName,cuisines,avgRating,cloudinaryImageId,costForTwo}=Data?.info;
    const {deliveryTime} =Data?.info.sla;
    
    return(
        <div>
            <div className="m-4 p-4 w-[250px] rounded-lg bg-green-50 hover:bg-gray-200"  >
                <img className="rounded-lg "  src={CDN_URL + cloudinaryImageId} alt="res-img" />
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h4>{areaName}</h4>
                <h4>{cuisines.join("-")}</h4>
                <h4>{avgRating} Stars</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime} minutes</h4>
            </div>

        </div>
    )
}
export default ResCard;