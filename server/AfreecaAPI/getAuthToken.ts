const afreecaAuthCode = require('../AfreecaAPI/getAuthCode');
//let qs = require('qs');

function getAuthToken(authNumber:string,callback?:any,):any{
    
    afreecaAuthCode.postCodeRequest(authNumber, (result:any)=>{
            const axios = require('axios');
            const qs = require('qs');
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': '*/*'
            };
            
            const data = qs.stringify({
                'grant_type': result? 'authorization_code':'refresh_token',
                'client_id': result ? 'e515195dfe0c6cf7eb2e7bfe05ab582e' : '',
                'client_secret': 'c9a6b8752a4da88de6fd2af99cd530954d440e172bb09b1d7d6ebd9162dee135',
                'redirect_uri': 'https://afreecatv.com',
                'code': result? result : '',
                'refresh_token': '78d3acb626dXXXXXXX' 
            });

            console.log('code : ',result);

            const config_token_first = {
                method: 'post',
                url: 'https://openapi.afreecatv.com/auth/token',
                headers: headers,
                data : data
            };

            axios(config_token_first)
                .then((res:any) => {
                    console.log('[Afreeca Auth Token]',res.data);

                    if(callback && res.data){
                        //console.log(res.data);\
                        // console.log(Object.keys(res.request.res));
                        // console.log((res.request.res.responseUrl));
                        
                        // console.log(Object.keys(res.data));
                        console.log(res.data);
                        callback(res.request.res.responseUrl);
                    }

                })
                .catch((err:Error)=>{
                    console.log('[ERROR: AXIOS in getToken]',err);
                });
    })    
}

getAuthToken('890000');



module.exports = {
    postTokenRequest: getAuthToken,
}

// axios.get('https://openapi.afreecatv.com/auth/code',{
    // params: { 
    //             "client_id":"e515195dfe0c6cf7eb2e7bfe05ab582e",
    //         },
    // }).then((res)=>{
    //     //console.log(Object.keys(res));
    //     //console.log(Object.keys(res.request.res));
    //     if(callback){
    //         callback(res);
    //     }  
    // });
    
// axios({
    //     url:'https://openapi.afreecatv.com/auth/code',
    //     method : 'post',
    //     headers : headers,
    //     params: { 
    //         "client_id":"e515195dfe0c6cf7ebxxxxxxxx",
    //         "auth_type":"api",
    //         "certification_number": '111111',
    //         },
    //     }).then((res)=>{
    //         console.log("GetAuthCode",res);
    //         return res;        
    //     }).catch((err)=>{
    //         console.log('[ERROR in axios]',err);
    //         return false;
    //     })


    // axios({
        //     url:'https://openapi.afreecatv.com/auth/token',
        //     method : 'post',
        //     headers : headers,
        //     data: { 
        //         "grant_type" : "authorization_code",
        //         "client_id": "e515195dfe0c6cf7eb2e7bfe05ab582e",
        //         "client_secret": "c9a6b8752a4da88de6fd2af99cd530954d440e172bb09b1d7d6ebd9162dee135",
        //         "redirect_uri": encoded,
        //         "code": result,
        //         "refresh_token": "78d3acb626dXXXXXXX"
        //         }
        //     }).then((res)=>{
        //         //console.log("GetAuthToken",res);
        //         console.log(res.data);
        //         return res;
        //     }).catch((err)=>{
        //         console.log('[ERROR in axios getToken]',err);
        //         return false;
        //     })