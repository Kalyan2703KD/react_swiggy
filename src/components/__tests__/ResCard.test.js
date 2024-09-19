import { render,screen } from "@testing-library/react";
import ResCard from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
 
it("Should render RestaurantCard component with props Data", ()=>{
    render(<ResCard Data={MOCK_DATA}/>);

     const name = screen.getByText("Shah Ghouse Spl Shawarma");

     expect(name).toBeInTheDocument();
})