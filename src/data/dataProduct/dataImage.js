import React from "react";


const importAll = (r) => r.keys().map(r);
const imageMap=importAll(require.context('../../media/HeaderBrand/', false, /\.(png|jpe?g|svg)$/));

const findIt=(elt)=>{
    return imageMap.find(index=>{
        const arrayFilter=index.split(".")[0].split('/');
        // console.log(arrayFilter);
        return (arrayFilter.includes(`${elt}`));
    
    });
}

export default {
    "headerImageProduct":[
        {
            "img":{"left":`${findIt("sliderLeft")}`,"right":`${findIt("sliderRight")}`},
            "descrPost":{
                "title":"SKIN CARE",
                "msg":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, libero!"
            }
        },
        {
            "img":{"left":`${findIt("sliderLeft")}`,"right":`${findIt("sliderRight")}`},
            "descrPost":{
                "title":"SKIN CARE",
                "msg":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, libero!"
            }
        },
        {
            "img":{"left":`${findIt("sliderLeft")}`,"right":`${findIt("sliderRight")}`},
            "descrPost":{
                "title":"SKIN CARE",
                "msg":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, libero!"
            }
        }
    ]
}