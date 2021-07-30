import { Fragment } from "react";
import { Route } from 'react-router-dom'
import { StoreView, InventoryView, HomeView } from "../views";

export interface PrivateRoutesProps {
    
}
 
const PrivateRoutes: React.FunctionComponent<PrivateRoutesProps> = () => {
    return ( 

        <Fragment>
            <Route exact path="/store">
                <StoreView />
            </Route>

            <Route exact path="/inventory">
                <InventoryView />
            </Route>

            <Route exact path="/">
                <HomeView />
            </Route>
        </Fragment>

     );
}
 
export default PrivateRoutes;