import React from "react";
import Demo2 from "./Demo2";
const Demo=(props)=>
{
    return <div>Demo Component
        <h1>{props.para}</h1>
        <Demo2 para2={props.para}/>
    </div>
};
export default Demo;
