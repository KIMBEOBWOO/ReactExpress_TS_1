import React,{Component, useState, Dispatch, SetStateAction, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

interface Props{
    result : object;
    handleLoginCheck : (check:boolean)=>any;
}

function Login(props:Props){
    const [user, setUserInfo] = useState({
        id : "",
        pw : ""
    });
    
    const {result,handleLoginCheck} = props;
    
    const {id,pw} = user;
    
    const onChange = (e:any) =>{
        const {value,name} = e.target;
        setUserInfo({
            ...user,
            [name]:value
        });
    };

    const onClick = (e:any) =>{
        axios.post('/users/login',{
            userInfo:{
                id:String(id),
                pw:String(pw)
            }
        })
        .then(response=>{
            console.log(response);
            if(response.data.result){
                handleLoginCheck(true);
            }
        });
        
        setUserInfo({
          id:"",
          pw:""
        });
    };

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
            
            <button onClick={onClick}>submit</button>
            <br/>
            <br/>
            <Link to='/signup'>
                signup
            </Link>
        </div>
    )
}

export default Login;