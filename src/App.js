import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import './styles/pages/home.scss';


import Home from './pages/home';
import ShopPageAction from './pages/shopPageAction';

function App() {
  return (
    <div id="App">
<<<<<<< Updated upstream
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path='/home' element={<Home/>}/>
          <Route path='/shopPageAction' element={<ShopPageAction/>}/>
          {/* <Route/> */}
        </Routes>
      </BrowserRouter>
=======
        <Home/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
