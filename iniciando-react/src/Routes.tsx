import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";

export function Routes(){
    return (
        <Router>
            <Route path="/catalog">
                <Catalog />
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
        </Router>
    )
}