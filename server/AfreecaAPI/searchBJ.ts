
function searchBJ(callback?:any){
    const axios = require('axios');
    const qs = require('qs');

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': '*/*', 
    };  
    
    const params = {
        "client_id": "e515195dfe0c6cf7eb2e7bfe05ab582e",
        "select_key": "cate",
        "select_value": "",
        "order_type": "broad_start",
        "page_no": "1",
    };

    const config_get = {
        url: "https://openapi.afreecatv.com/broad/list",
        headers: headers,
        params: params,
    };

    const userID = 'qjqdn1568';
    axios(config_get)
        .then((res:any)=>{
            console.log('[Afreeca Auth Code]',res.data);
            const BJList = res.data;    
            let count = 0;
            BJList.broad.forEach(function(bj:any){
                ++count;
                if(bj.user_id === userID){
                    console.log('해당 아이디를 가진 계정 존재 확인');
                    console.log('============================')
                    console.log(bj);
                }
            })
            console.log('page 당 방송국 개수 : ',count)
           
           
        })  
        .catch((err:Error)=>{
            console.log('[ERROR: AXIOS in getCode]',err);
        })
}

searchBJ();