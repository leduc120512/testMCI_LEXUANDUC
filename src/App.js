import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./defaultLayout";
import BarnerContent from "./defaultLayout/BarnerContent";
import Blog from "./Page/Blog";

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route
                    index
                    element={<BarnerContent />}
                />
                <Route path="/Blog" element={<Blog />} />

            </Route>

          </Routes>
        </div>
      </Router>
  );
}

export default App;
