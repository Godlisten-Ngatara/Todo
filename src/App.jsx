import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Components from "./pages/Components";
import Layout from "./pages/Layout";
import "./index.css";
import Home from "./pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
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
  );
}

export default App;
