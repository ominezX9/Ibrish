import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from "react-router-dom";
import { lazy, Suspense } from "react";


const Homepage = lazy(() => 
    import("@pages/homepage")
);




const appRoutes = (
    <Route 
        path="/"
        element={
            <Homepage/>
        }
    />
)
const routes = createRoutesFromElements(appRoutes);
const Router = createBrowserRouter(routes);

export default Router;
