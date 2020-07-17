import React,{useState, useEffect} from 'react';
import {Login,Signup} from '../pages'

interface props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean)=>void;
    handleHeaderMessage : (caseNUm:number,user?:string) => string;
}

function Auth(props:props):JSX.Element{
    const [isLoginPage,handleAuthPage] = useState(true);

    return(
        <div>
            {isLoginPage?
                <Login isLogined={props.isLogined} handleAuthPage = {handleAuthPage} 
                        handleLoginCheck={props.handleLoginCheck}
                        handleHeaderMessage={props.handleHeaderMessage}/>
                :<Signup isLogined={props.isLogined} handleAuthPage = {handleAuthPage} 
                        handleLoginCheck={props.handleLoginCheck}/>}
        </div>
    )
}

export default Auth;