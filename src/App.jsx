import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Ourblog from "./Components/Ourblog/Ourblog";
import TwoHome from "./Components/TwoHome/TwoHome";
import Day from "./Components/Day/Day";
import Month from "./Components/Month/Month";
import Week from "./Components/Week/Week";
import Contact from "./Components/Contact/Contact";
import { Toaster } from "react-hot-toast";
import DesginLogin from "./Components/Login&Register/DesginLogin/DesginLogin";
import Login from "./Components/Login&Register/Login/Login";
import Register from "./Components/Login&Register/Register/Register";
// import Login from "./Components/Login&Register/Login/Login";
function App() {
  return (
    <div className="App">
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Ourblog" element={<Ourblog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/Login"  element={<DesginLogin />} children={<Route path="/Login" element={<Login />} />}/>
        <Route path="/" element={<DesginLogin/> }children={<Route path="/register" element={<Register/>}/>} />
        <Route path="/" element={<TwoHome />} children={<Route path="/day" element={<Day />} />}/>
        <Route path="/" element={<TwoHome />} children={<Route path="/years" element={<Day />} />}/>
        <Route path="/"  element={<TwoHome />}  children={<Route path="/Month" element={<Month />} />}/>
        <Route path="/"  element={<TwoHome />}  children={<Route path="/Week" element={<Week />} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
