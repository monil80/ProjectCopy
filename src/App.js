import "./App.css";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import Uploaddoc from "./pages/Uploaddoc";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
 
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/otp" element={<Otp/>} />
          <Route exact path = "/dashboard" element={<Dashboard/>} />
          <Route exact path="/dashboard2" element = {<Dashboard2/>}/>
          <Route exact path = "/upload" element = {<Uploaddoc/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
