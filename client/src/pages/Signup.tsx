import React,{Component, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import history from '../history'
import { usePostRequest } from '../utils'

interface user{
    id : string;
    pw : string;
    name : string;
}

interface props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean)=>void;
    handleAuthPage : (isLoginPage:boolean)=>void;
}

function Signup(props:props):JSX.Element{
    const {success,doPostRequest,data} = usePostRequest<user,boolean>(
        '/signup',
        ()=>{
                handleAuthPage(true);
                handleLoginCheck(true);
        },
        ()=>{
            console.log("[SIGNUP ERROR] Try Other ID")
        }
    );

    const [user, setUserInfo] = useState({
        id : "",
        pw : "",
        name : ""
    });
    const {isLogined,handleLoginCheck,handleAuthPage} = props;
    const [result , setResult] = useState(false);
    const {id,pw,name} = user;

    const onClick = (e:any) =>{
        doPostRequest(user);
        history.replace('/');
        setUserInfo({
            id : "",
            pw : "",
            name : ""
        });
    }

    const onChange = (e:any) =>{
        const {value , name} = e.target;
        setUserInfo({
            ...user,
            [name]:value
        });

        console.log(value);
    };

    const onClickSignup = (e:any) =>{
        handleAuthPage(true);
    }

    return(
        <div>
            <h1>Signup Page!</h1>
            <input 
                type="text"
                name="name"
                value={name}
                onChange={onChange}
                placeholder="NAME"/>
            <br/>
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
            <button onClick={onClick}>submit</button>
            <br/>
            <br/>
            <Link to='/' onClick={onClickSignup}>
                Home
            </Link>
        </div>
    )
}

export default Signup;