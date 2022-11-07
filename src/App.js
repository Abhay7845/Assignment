import React from "react";
import Parent from "./Components/Parent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./form/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Parent />} />
          <Route path="/form" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
