import { render } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the Body Component", async()=>{
     await act(async()=> render(
     <BrowserRouter>
     <Body/>
     </BrowserRouter>))
   ;
});