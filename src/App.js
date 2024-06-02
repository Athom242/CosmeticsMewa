import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import './styles/pages/home.scss';


import Home from './pages/home';
import ShopPageAction from './pages/shopPageAction';
import ShopListPage from './pages/shopListPages';
import ContactPage from './pages/contact';
// import ContactPage from './pages/contact';
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>

          <Route path='/home' element={<Home/>}/>
          <Route path='/shopPageAction' element={<ShopPageAction/>}/>
          <Route path='/shop' element={<ShopListPage/>}/>
          <Route path='/contactUs' element={<ContactPage/>}/>
          {/* <Route/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
