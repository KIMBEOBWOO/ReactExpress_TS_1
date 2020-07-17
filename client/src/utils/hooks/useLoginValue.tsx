import React, { useCallback,useState } from 'react';
import axios from 'axios';

export interface session{
    doPostRequest: () => void;
    sessionId : string;
}

/*
    세션을 확인할 수 있는 함수를 리턴해야 한다
    해당 함수는 axios.post 를 통해 session user id와 logined 를 반환한다
    logined 가 필요한가?
*/

function useLoginValue( successCallback? : (sessionId:string) => void)
    : session {
    const [sessionId,setId] = useState("");
    const doPostRequest = useCallback((): any => {
      axios.post(`/users/session`)
        .then((res) => {
          // useState 를 비동기 처리하지 않고
          // response 를 callback 인자로 바로 넘김
          if(successCallback){
            successCallback(res.data);
          }
        }) 
        .catch((err) => {
          console.log(err + "in usePostRequest");
        });
    }, [successCallback, sessionId]);
    
    return {  
      sessionId, doPostRequest
    };
    /*
    // async useState 가 필요함
    function asyncHandler<USER=any>(
      userId:string
    ): Promise<any> {
      return new Promise((resolve, reject) => {
            console.log(userId);
            resolve(setId(userId));
          }
    )};
    */
    
    /*
    async function asyncHandler2(data:string){
      return await setId(data);
    }
    */

    
}

export default useLoginValue;

