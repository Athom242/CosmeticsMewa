import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import ShopPageAction from './pages/shopPageAction';
import ShopListPage from './pages/shopListPages';
import ContactPage from './pages/contact';

import dataProduct from "./data/dataProduct/dataItem"
import ProductDetailPage from './pages/shopProductDetailPage';
import SignPage from './pages/signPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const [dataProductChoice,setDataProductChoice]=useState([]);
let dataProductChoice=[];
const handleProductChoice=(elt)=>{
  //Gestion Evenement Ajout dans le panier
  //Ajout de l' objet contenant 

  //verifier que le l' objet est bien conforme `a ce qui est demand'e
  //verifier que l' objet n' est pas d'ej`a present dans la liste courante
  //verifie que l' objet est present dans base de donn'e de produit en stock

  // si tout est okey enregistre dans la variable dataProductChoice

  console.log("Ajout de l' element",elt);
  const arrayCopy=dataProductChoice;
  arrayCopy.push(elt)
  // setDataProductChoice(arrayCopy);
  dataProductChoice=arrayCopy;

}


root.render(
  <React.StrictMode>
    
    <Router basename='/'>
      
      
      <Routes>
        <Route index element={<App/>} />

        <Route path="/home" element={<App />} />
        <Route path="/shopPageAction" element={<ShopPageAction onhandleAddProduct={handleProductChoice}/>} />
        <Route path="/shop" element={<ShopListPage />} />
        <Route path='/shopProductDetailPage/:idProductItem' element={<ProductDetailPage/>}/>
        <Route path="/contactUs" element={<ContactPage />} />
        <Route path='/SignPage' element={<SignPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
