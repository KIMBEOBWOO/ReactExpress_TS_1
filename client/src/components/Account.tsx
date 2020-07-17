import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {usePostRequest} from '../utils'

interface props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean)=>void;
}

function Account(props:props):JSX.Element{
    const {isLogined,handleLoginCheck} = props;
     // 로그아웃 
     const useLogout = usePostRequest<void,boolean>(
        '/logout',
        ()=>{
            handleLoginCheck(false);
        }
    );
    const logout = () => {
        useLogout.doPostRequest();        
    }

    // 계정 삭제
    const useDelete= usePostRequest<void,boolean>(
        '/delete',
        ()=>{
            handleLoginCheck(false);
        }
    )
    // user id 를 넘겨야 삭제가 가능 
    // props로 다시 넘겨야함?
    // 서버에서 session.id로 삭제 
    const deleteuser = () => {
        useDelete.doPostRequest();
    }
    // 실행 후 로그아웃이 안됨
    
    return(
        <div>
            {isLogined? <div><Link to='/' onClick={logout}>logout</Link>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/' onClick={deleteuser}>delete Account</Link></div>:
                <div></div>
            }
        </div>
    );
}

export default Account;