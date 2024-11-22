import { Suspense } from "react"
import { Outlet } from "react-router-dom";
import MenuBar from "@components/menu-bar";
// import Header from "@components/shared/header";

export default function DefaultLayout() {
    return (
        <div className="w-full">
            <MenuBar />
            <div className="w-full">
                {/* <Header /> */}
                <main className="h-full">
                    <Suspense
                        fallback={
                            <div className="h-screen flex items-center justify-center">
                                {/* <Loader /> */}
                                Loading ...
                            </div>
                        }>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </div>
    )
}
