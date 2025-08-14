import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/Components";
import Layout from "./pages/Layout";
import "./index.css";
import Home from "./pages/Home";
import { AppProvider } from "./contexts/AppProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppProvider>
      <div className="w-screen h-screen bg-gray-100">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="components" element={<Components />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
