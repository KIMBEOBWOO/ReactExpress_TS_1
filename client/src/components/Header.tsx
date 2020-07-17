import React,{Component, useState, Dispatch, SetStateAction, useEffect} from 'react'
import useLoginValue from '../utils/hooks/useLoginValue';
import Account from './Account';

interface props{
    isLogined : boolean;
    handleLoginCheck : (check:boolean) => void;
    handleHeaderMessage : (caseNUm:number,user?:string) => string;
}
/*
    헤더 파일 메세지 출력 안됨
    handleHeadermessage 잘못만듬
    아니면 props 로 caseNum 도 같이 넘겨야 자유롭게 메세지 출력가능
*/
function Header(props:props):JSX.Element{
    const {isLogined,handleLoginCheck,handleHeaderMessage} = props;
    const [userState,setUserState] = useState({
        isLogined : false,
        id : "",
    });
    
    const {sessionId,doPostRequest} = useLoginValue(
        (sessionId)=>{
            setUserState({
                isLogined:true,
                id : sessionId
            });
            handleLoginCheck(true);
        }
    );
    
    useEffect(()=>{
        console.log("do : "+doPostRequest());    
    },[props,userState.id]);

    return(
        <div>
            <h1>Header Component</h1>
            {isLogined?<div>{handleHeaderMessage(4,userState.id)}</div>:<div>{handleHeaderMessage(1)}</div>}
            <Account isLogined={isLogined} handleLoginCheck={handleLoginCheck}/>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Header;

/*
{isLogined?<div>USER ID : {userState.id}</div>:<div>login please</div>}

*/