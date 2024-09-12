import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HeaderFooterOutlet from "./HeaderFooterOutlet.js";
import Loading from "../components/Loading.js";

// pages imports -- lazy
const LazyHome = lazy(() => import("../pages/Home.js"))

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HeaderFooterOutlet />}>
                <Route path="/" element={
                    <Suspense fallback={<Loading />}>
                        <LazyHome />
                    </Suspense>
                } />
            </Route>
        </Routes>
    )
}

export default AppRoutes;