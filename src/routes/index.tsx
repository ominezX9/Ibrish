import { 
    createBrowserRouter, 
    createRoutesFromElements, 
    Route 
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Homepage from "@pages/homepage";

const DefaultLayout = lazy(() => 
    import("@layouts/default-layout")
);
// const Homepage = lazy(() => 
//     import("@pages/homepage")
// );




const appRoutes = (
    <Route 
        path="/"
        element={
            <Suspense fallback={<LoaderFull />}>
          <DefaultLayout />
        </Suspense>
        }
    >
        <Route
            index
            element={<Homepage/>}
        />
    </Route>
)
const routes = createRoutesFromElements(appRoutes);
const Router = createBrowserRouter(routes);

export default Router;
