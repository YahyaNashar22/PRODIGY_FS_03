import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import HeaderFooterOutlet from "./HeaderFooterOutlet.js";
import ProtectedRoute from "./ProtectedRoutes.js";
import Loading from "../components/Loading.js";
import NotFound from "../components/NotFound.js";

// pages imports -- lazy
const LazyHome = lazy(() => import("../pages/Home.js"));
const LazyStore = lazy(() => import("../pages/Store.js"));
const LazyAboutUs = lazy(() => import("../pages/AboutUs.js"));
const LazyContactUs = lazy(() => import("../pages/ContactUs.js"));
const LazySign = lazy(() => import("../pages/Sign.js"));
const LazyDashboard = lazy(() => import("../pages/Dashboard.js"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HeaderFooterOutlet />}>
                <Route path="/" element={
                    <Suspense fallback={<Loading />}>
                        <LazyHome />
                    </Suspense>
                } />

                <Route path="/store" element={
                    <Suspense fallback={<Loading />}>
                        <LazyStore />
                    </Suspense>
                } />

                <Route path="/about-us" element={
                    <Suspense fallback={<Loading />}>
                        <LazyAboutUs />
                    </Suspense>
                } />

                <Route path="/contact-us" element={
                    <Suspense fallback={<Loading />}>
                        <LazyContactUs />
                    </Suspense>
                } />

            </Route>

            <Route path='/sign-in-up' element={
                <Suspense fallback={<Loading />}>
                    <LazySign />
                </Suspense>
            } />

            { /* Dashboard Protected Route */}
            <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={
                    <Suspense fallback={<Loading />}>
                        <LazyDashboard />
                    </Suspense>
                } />
            </Route>
            { /* Not Found Route */}
            <Route path="/*" element={<NotFound />} />

        </Routes>
    )
}

export default AppRoutes;