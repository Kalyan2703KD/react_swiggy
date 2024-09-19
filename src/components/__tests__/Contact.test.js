import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case",()=>{
    test("Should load Contact Us component",()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    it("Should load  button inside Contact Us component",()=>{
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });
    it("Should load input name inside Contact Us component",()=>{
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    test("Should load 2 input boxes on the Contact Us component",()=>{
        render(<Contact/>);
       
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

