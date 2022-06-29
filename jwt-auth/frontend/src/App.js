import {  Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";

export default function App() {
  return (

    
      <Routes>
        <Navbar />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);