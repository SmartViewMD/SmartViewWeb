import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";  // Use HashRouter
import V from "./components/V";
import "./App.css";

//import { Header } from "./components/Header";
import NavBar from "./components/nav";
import Home from "./components/land/Home";
import Privacy from "./Privacy";
import CovidStatement from "./CovidStatement";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Footer from "./components/Footer.js";

import Delete from "./components/DeletionRequest.js";
import "./components/footer.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* No need for 'exact' anymore */}
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Blog />} />
        <Route path="/V/:num" element={<V />} />
        <Route path="/overview" element={<Form />} />
        <Route path="/delete" element={<Delete />} />
        
        {/* Debugging route */}
        <Route path="/privacy" element={<><Privacy /></>} />

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
