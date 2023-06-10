import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import LoginPage from './component/user/LoginPage';
import SignUp from './component/user/SignUp';
import ContactUs from './component/ContactUs';
import Booking from './component/user/Booking';
import Error from './component/Error';
import LoginPages from './component/admin/LoginPages';
import Footer from './component/Footer';
import AdminDashboard from './component/admin/AdminDashboard';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
        <Route path="/booking" element={<Booking></Booking>} />
        <Route path="/admin" element={<LoginPages />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
