import React from 'react';

const useLoginCheck = () : {
    isLogined : boolean,
    handleLoginCheck : (check:boolean)=>void
} => {
    const [isLogined,setResult] = React.useState<boolean>(false);
   
    function handleLoginCheck(check:boolean):void{
        setResult(check);
    };

    return {
        isLogined , handleLoginCheck
    };
}

export default useLoginCheck;
