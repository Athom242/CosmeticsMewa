import logo from './logo.svg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import {HashRouter,Routes,Route} from 'react-router-dom';
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
        <Home/>
    </div>
  );
}

export default App;
