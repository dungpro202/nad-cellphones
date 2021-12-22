
import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import cartReducer from "./cart.reducer";
import orderReducer from "./order.reducer";
const rootReducer =  combineReducers({
    auth:authReducer,
    category:categoryReducer,
    product:productReducer,
    cart:cartReducer,
    order:orderReducer,
})

export default rootReducer;