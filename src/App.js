
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import ForgetPassword from "./pages/ForgetPassword";
import Dashboard from "./pages/Dashboard";



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/register" element={<Registeration />}/>
          <Route path="password-reset" element={<ForgetPassword />}/>
          <Route path="dashboard" element={<Dashboard />} />

          
        </Routes></BrowserRouter>

    </div>
  );
}

export default App;
