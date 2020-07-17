import React, { useCallback } from 'react';
import axios from 'axios';

export interface UsePostRequestObject<T, P> {
    success: true | null;
    doPostRequest: (param: T) => void;
    data: P | null;
}

export default function usePostRequest<PARAM_TYPE = {[key: string]: any}, RES_DATA_TYPE = any>(
    url: string,
    successCallback?: () => void,
    failCallback?:()=>void
  ): UsePostRequestObject<PARAM_TYPE, RES_DATA_TYPE> {
    const [success, setSuccess] = React.useState<true | null>(null);
    const [data, setData] = React.useState<RES_DATA_TYPE | null>(null);

    const doPostRequest = useCallback((param: PARAM_TYPE): void => {
      console.log({...param});
      axios.post<RES_DATA_TYPE>(`/users${url}`,
        { ...param })
        .then((res) => { // 200 번대 상태코드 , 성공!
            setData(res.data);
            setSuccess(true);
            if (successCallback) { 
              successCallback(); 
            }
        })
        .catch((err) => {
          setSuccess(null); // 401, signup error, login error, 재시도 요청으로 반환
          if(failCallback){
            failCallback();
          }
        });
    }, [successCallback, url,data]);
    return {
      success,  data, doPostRequest,
    };
  }