import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';



const PackageRoutes = () => {
   
const location = useLocation();

return ( 
 
    <AnimatePresence exitBeforeEnter>

    <Routes key={location.pathname} location={location}>

      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>        

    </Routes>
    
    <ToastContainer 
    position="top-right" 
    autoClose={1200}
    hideProgressBar={false} 
    newestOnTop={false}
    closeOnClick rtl={false}
    pauseOnFocusLoss draggable
    pauseOnHover
    toastStyle={{ backgroundColor: "black", color: "white" }}
    />
    </AnimatePresence> 
)

}

export default PackageRoutes;



