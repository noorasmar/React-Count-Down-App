import React, { useEffect } from "react";
import './style.css'

function Timer({time, setTime}) {

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(time > 0){
                setTime(time - 1)
            }else{
                setTime(0)
            }
        },1000)
        
        return () => clearInterval(interval)
    },[time])
    return ( 
        <div>
            {time}
        </div>
    );
}

export default Timer;