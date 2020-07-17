import React,{Component, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {HomeTable} from '../components';
import { usePostRequest } from '../utils';

interface Props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean)=>void;
    handleHeaderMessage : (caseNUm:number,user?:string) => string;
}

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
            <td>{props.info.index}</td><td>user ID : </td><td>{props.info.id}</td>
        </div>
    );
}

function Home(props:Props):JSX.Element{
    // 리스트 뷰 보이기
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
    },[]);

    /*
    // 로그아웃 
    const {success,doPostRequest,data} = usePostRequest<void,boolean>(
        '/logout',
        ()=>{
            handleLoginCheck(false);
        }
    );

    const {isLogined,handleLoginCheck} = props;
    const logout = () =>{
        doPostRequest();        
    }
    
    const onClick = (e:any)=>{
        
    }
    */
    return(
        <div>
            <h1>Home Page</h1>
            <table>
                <thead>
                        <td><h4>All Users</h4></td>
                </thead>
                <tbody>
                    {listView}
                </tbody>
            </table>
        </div>
    )
}

export default Home;