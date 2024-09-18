import React, { useState, lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import LoadingPage from './LoadingPage.jsx';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));
const Product = lazy(() => import('./Product'));
const Decking = lazy(() => import('../Pages/ProductsPage/Decking'));
const Fence = lazy(() => import('../Pages/ProductsPage/Fence'));
const Tile = lazy(() => import('../Pages/ProductsPage/Tile'));
const PanelOutdoor = lazy(() => import('../Pages/ProductsPage/PanelOutdoor'));
const Faq = lazy(() => import('./Faq'));
const Terms = lazy(() => import('./Terms'));
const PrivacyPolicy = lazy(() => import('./PrivacyPolicy'));

function PageTransition() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [location.pathname]);

    return (
        <>
            {isLoading && <LoadingPage setIsLoading={setIsLoading} />}
            <Suspense fallback={<LoadingPage setIsLoading={setIsLoading} />}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/products/fence" element={<Fence />} />
                    <Route path="/products/decking" element={<Decking />} />
                    <Route path="/products/tile" element={<Tile />} />
                    <Route path="/products/paneloutdoor" element={<PanelOutdoor />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default PageTransition;
