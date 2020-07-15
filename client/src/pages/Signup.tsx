import React,{Component, useState} from 'react'
import { Link } from 'react-router-dom'
//import { reqSignup } from '../services/axios'
//import { response } from 'express';
import axios from 'axios'
import history from '../history'

const Signup = () =>{
    const [user, setUserInfo] = useState({
        id : "",
        pw : "",
        name : ""
    });

    const [result , setResult] = useState({
      isSignupSuccess : false
    });

    const {id,pw,name} = user;
    const {isSignupSuccess} = result;

    const onClick = (e:any) =>{
        console.log("start axios");
        
        axios.post('/users/signup',{
            userInfo:{
                id : user.id,
                pw : user.pw,
                name : user.name
            }
        })
        .then(response=>{
            console.log(response.data);
            if(response.data.result){
                setResult({
                    isSignupSuccess:true
                });
                console.log("go to login");
                history.replace('/');
            }
        });
        setUserInfo({
          id:"",
          pw:"",
          name:""
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
            <Link to='/'>
                Home
            </Link>
            <div>
              {isSignupSuccess?<h2>signup true</h2>:<h2>signup false</h2>}
            </div>
        </div>
    )
}

export default Signup;