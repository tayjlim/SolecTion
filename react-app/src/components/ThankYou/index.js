import React, { useState, useEffect, useRef } from "react";

import Loading from '../Loading';

function ThankYouVisiting () {
    const [loaded, setloaded] = useState(false)
    useEffect(async()=>{

        setTimeout(async ()=>{
            await setloaded(true)
        },1000)
    })
    if(!loaded) return (<Loading></Loading>)

    return(<div className ='thankyou'><img src = 'https://cdn.discordapp.com/attachments/1118210959077556414/1121489244041519245/newonept1.jpeg'></img></div>)

}
export default ThankYouVisiting
