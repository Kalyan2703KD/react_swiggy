import { createSlice } from "@reduxjs/toolkit"
const cartSlice = createSlice({
   name:"cart",
   initialState:{
    items: [],
   },
   reducers:{
    addItem:(state,action)=>{
        //Redux Toolkit uses immer BTS
        state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
        //Redux Toolkit uses immer BTS
        state.items.pop();
    },
    clearCart:(state,action)=>{
        //RTK-either Mutate the existing state or return a new state
        //state.items.length = 0; //OriginalState= []

        return {items : []}; //this new object will be replaced inside originalState ={items:[]}
        },
   },
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;