import React,{useEffect} from 'react'
import {Home} from '../pages'
import {useLoginCheck,useHeaderMessage} from '../utils';
import Header from './Header';
import Auth from './Auth';

function Main(){
    const {isLogined , handleLoginCheck} = useLoginCheck();   
    const {caseNum , handleHeaderMessage} = useHeaderMessage();

    useEffect(()=>{
        handleLoginCheck(isLogined);  
        console.log(isLogined + " in Main Component");
    },[isLogined,handleLoginCheck]);    

    useEffect(()=>{
        handleHeaderMessage(10);
    },[]);

    return(
        <div>
            <Header isLogined={isLogined} handleLoginCheck={handleLoginCheck} handleHeaderMessage={handleHeaderMessage}/>   
            {isLogined? <Home isLogined={isLogined} handleLoginCheck={handleLoginCheck} handleHeaderMessage={handleHeaderMessage}/> 
                    : <Auth  isLogined={isLogined} handleLoginCheck={handleLoginCheck} handleHeaderMessage={handleHeaderMessage}/>}
        </div>
    );
}

export default Main;