import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import './styles/pages/home.scss';


import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path='/home' element={<Home/>}/>
          {/* <Route/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
