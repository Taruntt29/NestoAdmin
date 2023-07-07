import { BrowserRouter, Route, Routes } from "react-router-dom";

import Property from "./property/Property";
import PropertyManagement from "./property/PropertyManagement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nesto/admin" element={"test"} />
        <Route path="/nesto/psroperty" element={<Property />} />
        <Route
          path="/nesto/property-management"
          element={<PropertyManagement />}
        />
        {/* PropertyManagement */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
