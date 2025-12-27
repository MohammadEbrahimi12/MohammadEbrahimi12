import React,{useState,useEffect,useref,useCallback} from "react";

const NormalList = ({items,itemHeight,windowHeight}) =>{
    return(
        <div
            style={{height: `${windowHeight}px`}}
        >
            <div style={{height:`${windowHeight}px`}}>
                {items?.map((item,i) =>(
                    <div key={i}>{item}</div>
                ))}
            </div>
        </div>
    );
};

export default NormalList;