
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './pages/home/Home'
import {P1} from './pages/P1/P1';
import {P2} from './pages/P2/P2';
import {P3} from './pages/P3/P3';

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/P1" element={<P1/>}/>
     <Route path="/P2" element={<P2/>}/>
     <Route path="/P3" element={<P3/>}/>
    </Routes>
  );
}

export default App;
