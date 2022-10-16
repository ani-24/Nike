import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignUp from './components/SignUp'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
                  <Nav></Nav>
             <Routes>
                 <Route path='/' element={<Home></Home>}></Route>
                 <Route path='/about' element={<About></About>}></Route>
                 <Route path='/contact' element={<Contact></Contact>}></Route>
                 <Route path='/signUp' element={<SignUp></SignUp>}></Route>
             </Routes>
             <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
