import {createContext } from "react";



export const ListProductChoice=createContext([]); //list des produit choisi par le client avant l'achat
export let cacheListProduct=[]; //List des produit choisi qui vont passer dans une autre page comme un  sessionStorage


export const handleCacheListProduct=(newValueList)=>{
    const arrayCopy=[...newValueList];

    cacheListProduct=arrayCopy;
}