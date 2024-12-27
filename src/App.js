import logo from './logo.svg';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import CaseSelection from './components/CaseSelection/CaseSelection';
import Home from './components/Home/home';
import Collections from './components/Collections/collections';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
      </Routes>
      </Router>
  )
}

export default App;
