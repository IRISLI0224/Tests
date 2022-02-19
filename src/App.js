import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './pages/home/Home'
import {Searchparams} from './pages/Searchparams/Searchparams'
import {WithLink} from './pages/WithLink/WithLink'
import {Nopage} from './pages/Nopage/Nopage'
import {ReactnavLink} from './pages/ReactnavLink/ReactnavLink'
import {Withparams} from './pages/Withparams/Withparams'

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     /*需要有链接*/
     <Route path="/with-link" element={<WithLink/>}/> 
     带参数
     <Route path="/with-params/:id" element={<Withparams/>}/>
     <div>多个?minBed=3&maxBed=5</div>
     <Route path="/search-params" element={<Searchparams/>}/>
     专门给navigation
     <Route path="/react-nav-link" element={<ReactnavLink/>}id/>
     默认path,放最后，404
     <Route path="*" element={<Nopage/>}/>
    </Routes>
  );
}

export default App;
