// updated code with routes
import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LoadingScreen from './components/loading-screen/LoadingScreen';

const DsaWebsite = lazy(() => import("./dsa/App"));
const PartnersDetailsMain = lazy(() => import('./informative/App'));
const BuilderWeb = lazy(() => import("./builder/App"));
const BrokerWeb = lazy(() => import("./broker/App"));
const AdminPage = lazy(() => import("./admin-page/App"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* informative */}
        <PartnersDetailsMain />

        {/* dsa */}
        <DsaWebsite />
        {/* builder */}
        <BuilderWeb />

        {/* broker */}
        <BrokerWeb />

        {/* Admin Page */}
        <AdminPage />
      </Suspense>
    </>
  );
};
export default App;
