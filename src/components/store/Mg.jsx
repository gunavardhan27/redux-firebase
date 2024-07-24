import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialTogglestate = { toggle: false };

const dataSlice = createSlice({
  name: "toggle",
  initialState: initialTogglestate,
  reducers: {
    toggleButton(state) {
      state.toggle = !state.toggle;
    },
  },
});
//const initialCartState = { items: [], quantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: {items:[],totalQuantity:0},
  reducers: {
    addItem(state, action) {
      const pam = action.payload;
      console.log(pam.id)
      const existingItem = state.items.find(item => item.itemId === pam.id);
      if (!existingItem) {
        
        state.items.push({ itemId: pam.id,total:pam.price, price:pam.price,title:pam.title,description:pam.description,quantity:1});
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        existingItem.quantity++
        existingItem.total = existingItem.price + existingItem.total
        //state.items[index].quantity++
        //state.items[index].total = state.items[index].quantity*state.items[index].price
        state.totalQuantity++;
      }

      //console.log(state.items);
    },
    removeItem(state,action) {
        state.totalQuantity--
        //console.log(action.payload)
        if(action.payload.quantity>1){
            const item = state.items.find(item=>item.itemId === action.payload.id)
            if(item){
                item.quantity--
                item.total = item.total - item.price
            }
        }
        else{
        const newItems = state.items.filter((item)=>item.itemId !== action.payload.id)
        state.items = [...newItems]
        }
    },
  },
});

const store = configureStore({
  reducer: { tog: dataSlice.reducer, cart: cartSlice.reducer },
});
export const toggleAction = dataSlice.actions;
export const cartAction = cartSlice.actions;
export default store;
