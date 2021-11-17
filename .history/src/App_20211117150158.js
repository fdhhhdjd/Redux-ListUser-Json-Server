import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <ToastContainer />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addUser" component={AddEditUser} />
            <Route path="/editUser/:id" component={AddEditUser} />
            <Route path="/userInfo/:id" component={UserInfo} />
            <Route path="/about" component={About} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
