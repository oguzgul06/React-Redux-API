import { data } from "../data";

const INITIAL_STATE = {
  bookList: data,
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_BAG":
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};

export default reducer;
