import { transcode } from "buffer";

function getAfreecaAuthCode(callback?:any){
    const axios = require('axios');
    const qs = require('qs');

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': '*/*', 
    };
    
    const params = {
        "client_id": "e515195dfe0c6cf7eb2e7bfe05ab582e",
    };

    const config_get = {
        url: 'https://openapi.afreecatv.com/auth/code',
        headers: headers,
        params: params,
    };

    axios(config_get)
        .then((res:any)=>{
            console.log('[Afreeca Auth Code]',res.data);
            
            if(callback && res.data){
                callback(res.request.res.responseUrl);
            }
        })  
        .catch((err:Error)=>{
            console.log('[ERROR: AXIOS in getCode]',err);
        })
}

function postAfreecaAuthCode(authNumber:string,callback:any){
    const axios = require('axios');
    const qs = require('qs');
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': '*/*', 
    };
    
    const data = {
        "client_id":"e515195dfe0c6cf7eb2e7bfe05ab582e",
        "auth_type":"api",
        "certification_number": authNumber,
    };

    const config_post = {
        method: 'post',
        url: 'https://openapi.afreecatv.com/auth/code',
        headers: headers,
        params: data,
    };
    
    axios(config_post)
        .then((res:any)=>{
            console.log(res.data);
            
            if(callback && res.data){
                callback(res.data.code);
                
            }
        })  
        .catch((err:Error)=>{
            console.log('[ERROR: AXIOS in postCode]',err);
        })
}

module.exports = {
    getCodeRequest : getAfreecaAuthCode,
    postCodeRequest : postAfreecaAuthCode
}

// function getAuthCode(param:any,callback:any):any{
//     axios.get('https://openapi.afreecatv.com/auth/code',{
//     params: { 
//                 "client_id":"e515195dfe0c6cf7eb2e7bfe05ab582e",
//             },
//     }).then((res)=>{
//         //console.log(Object.keys(res));
//         //console.log(Object.keys(res.request.res));
//         if(callback){
//             callback(res);
//         }  
//     });
    
//     // axios({
//     //     url:'https://openapi.afreecatv.com/auth/code',
//     //     method : 'post',
//     //     headers : headers,
//     //     params: { 
//     //         "client_id":"e515195dfe0c6cf7ebxxxxxxxx",
//     //         "auth_type":"api",
//     //         "certification_number": '111111',
//     //         },
//     //     }).then((res)=>{
//     //         console.log("GetAuthCode",res);
//     //         return res;        
//     //     }).catch((err)=>{
//     //         console.log('[ERROR in axios]',err);
//     //         return false;
//     //     })
// }


