import React from 'react';

const useHeaderMessage = ( ): {
    caseNum : number,
    handleHeaderMessage : (caseNum:number,user?:string)=>string
} => {
    const [caseNum,setResult] = React.useState<number>(Number);
   
    function handleHeaderMessage(caseNum:number,user?:string):string{
        setResult(caseNum);
        let message : string = "";
        switch(caseNum){
            case 1:{//not logined , default
                message = "Login please!"
                break;
            }
            case 2:{//login error , not exist
                message = "Login Error , Check user Information!"
                break;
            }
            case 3:{//signup error , duplicated
                message = "Signup Error , Using Other ID!"
                break;
            }
            case 4:{//signup error , duplicated
                if(user){
                    message = "USER ID : "+user
                }
                else{
                    message = "Some Thing Wrong.."
                }
                break;
            }
            default:{
                message = "Hello!"
                break;
            }
        }
        return message;
    };
    
    return {
        caseNum,handleHeaderMessage
    };
}

export default useHeaderMessage;
