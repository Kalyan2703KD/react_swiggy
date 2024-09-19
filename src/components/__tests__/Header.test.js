import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../redux/appStore";
import { fireEvent,screen,render } from "@testing-library/react";
it("Should render Header Component with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
       </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();
});
it("Should render Header Component with a Cart items 0 ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart-(0items)");
  
    expect(cartItems).toBeInTheDocument();
  });
  
  it("Should render Header Component with a Cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
  
    expect(cartItems).toBeInTheDocument();
  });
  
  it("Should change Login Button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", { name: "Login" });
  
    fireEvent.click(loginButton);
  
    const logoutButton = screen.getByRole("button", { name: "Logout" });
  
    expect(logoutButton).toBeInTheDocument();
  });