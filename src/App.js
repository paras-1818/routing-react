import './App.css';
import India from './pages/India';
import Sports from './pages/Sports';
import ScienceAndTech from './pages/ScienceAndTech';
import Economy from './pages/Economy';
import Politics from './pages/Politics';
import International from './pages/International';
import Governance from './pages/Governance';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {


  return (
<>
 <Router>
 <Routes>

 <Route exact path='/india' element={<India/>} />
 <Route exact path='/international' element={<International/>} />
 <Route exact path='/political' element={<Politics/>} />
 <Route exact path='/science' element={<ScienceAndTech/>} />
 <Route exact path='/economy' element={<Economy/>} />
 <Route exact path='/governance' element={<Governance/>} />
 <Route exact path='/sports' element={<Sports/>} />



   </Routes>
   </Router>  

       
       
</>

    
  );
}

export default App;
