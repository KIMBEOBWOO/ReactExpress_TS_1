import React,{Component, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import {Home,Login,Signup} from '../pages'
import {createStore} from 'redux'
import {rootReducer} from '../utils/index'

const store = createStore(rootReducer);

// 커스텀 훅 작성
function useLoginCheck(){
    const [result,setResult] = useState({
        isLogined : false
    });
   
    function handleLoginCheck(check:boolean):any{
        setResult({
            isLogined:check
        });
    };

    return {result , handleLoginCheck};
}

const Main = () =>{
    const {result , handleLoginCheck} = useLoginCheck();   

    console.log(result);
    useEffect(()=>{
        handleLoginCheck(result.isLogined);  
    },[result.isLogined]);
    
    return(
        <div>
            <h1>Main Page</h1>
            <hr></hr>
            {result.isLogined? <Home/> : <Login  result={result} handleLoginCheck={handleLoginCheck}/>}
        </div>
    );
}

export default Main;