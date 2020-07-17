import React,{Component, useState, Dispatch, SetStateAction, useEffect} from 'react'
import { Link } from 'react-router-dom'

import {usePostRequest} from '../utils';


interface Props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean)=>void;
    handleAuthPage : (isLoginPage:boolean)=>void;
    handleHeaderMessage : (caseNUm:number,user?:string) => string;
}

interface user{
    id : string;
    pw : string;
}

function Login(props:Props):JSX.Element{

    const {success,doPostRequest,data} = usePostRequest<user,boolean>(
        '/login',
        ()=>{
            handleLoginCheck(true);
        },
        /*
        ()=>{
            console.log("Login Component FailCallback")
            handleLoginCheck(false);
            handleHeaderMessage(2);
        }
        */
    );

    const [user, setUserInfo] = useState({
        id : "",
        pw : ""
    });
    const {isLogined,handleLoginCheck,handleAuthPage,handleHeaderMessage} = props;
    const {id,pw} = user;

    const onChange = (e:any) =>{
        const {value,name} = e.target;
        setUserInfo({
            ...user,
            [name]:value
        });
    };

    const onClickLogin = (e:any) =>{
        doPostRequest({id:id,pw:pw});
        setUserInfo({
            id:"",
            pw:""
          });
    };

    const onClickSignup = (e:any) =>{
        handleAuthPage(false);
    }

    return(
        <div>
            <h1>Login Page</h1>
            <input 
                type="text"
                name="id"
                value={id}
                onChange={onChange}
                placeholder="ID"/>
            <br/>
            <input 
                type="password"
                name="pw"
                value={pw}
                onChange={onChange}
                placeholder="PW"/>
            
            <button onClick={onClickLogin}>submit</button>
            <br/>
            <br/>
            <Link onClick={onClickSignup} to='/'>
                signup
            </Link>
        </div>
    )
}

export default Login;