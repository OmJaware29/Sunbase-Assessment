
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddCustomer from './users/AddCustomer';
import EditCustomer from './users/EditCustomer';
import Home from './pages/Home';
import AuthLogin from './pages/AuthLogin';


function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route exact path='/' element={<AuthLogin/>}></Route>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path = "/addCustomer" element={<AddCustomer />}/>
          <Route exact path = "/editCustomer/:custId" element={<EditCustomer/>}/> 
        </Routes>
    </Router>
    </div>
  );
}

export default App;
