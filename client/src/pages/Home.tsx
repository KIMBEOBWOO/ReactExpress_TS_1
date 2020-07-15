import React,{Component, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {HomeTable} from '../components';

interface user{
    id:string;
    index : number;
    pw:string;
    name : string;
}

interface props{
    info:user;
}

function UserInfo(props:props){
    return(
        <div>
            <td>{props.info.index}</td><td>{props.info.name}</td><td>{props.info.id}</td>
        </div>
    );
}

const Home = () =>{
    const [allUser,setAlluser] = useState({
        list :  [{name:"",id:"",index:0,pw:""}]
    });

    const listView = allUser.list.map(n => <tr><UserInfo info={n}/></tr>);
    
    useEffect(()=>{
        axios.post('/users/alluserinfo',{
        })
        .then(response=>{
            if(response.data.result){
                setAlluser({
                    list : JSON.parse(response.data.userinfo)
                })
            }
        });
    },[allUser.list]);

    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/'>
                logout
            </Link>
            <br></br>
            <Link to='/signup'>
                signup
            </Link>
            <br/>
            <table>
                <thead>
                    <tr>
                        <td><h4>All User</h4></td>
                    </tr>
                </thead>
                <tbody>
                    {listView}
                </tbody>
            </table>
        </div>
    )
}

export default Home;