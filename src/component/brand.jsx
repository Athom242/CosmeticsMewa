import { useState } from "react";




export function BrandCenterItem(props){
    const [infoData,setInfoData]=useState(props.InfoData);

    return(
        <div className="brandCenterItem">
        <div className="brandDescr">
            <h2 className="title">
                {infoData.descrPost.title}
            </h2>

            <p className="descr">
                {infoData.descrPost.msg}
            </p>

            <div className="linkButton"><a href="" className="linkFindBeauty">FIND BEAUTY</a></div>
        </div>

        <div className="brandImage">
            <div className="imgRight"><img src={infoData.img.left} alt="" /></div>
            <div className="imgLeft"><img src={infoData.img.right} alt="" /></div>
        </div>
    </div>
    )
}