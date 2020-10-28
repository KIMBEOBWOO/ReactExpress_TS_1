
function getTokenTest(code? : string){    // true - 최초발급(default) , false - 재발급
    const axios = require('axios');
    const qs = require('qs');

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Accept': '*/*', 
    };
    console.log(code);

    const data = qs.stringify({
        'grant_type': code? 'authorization_code' : 'refresh_token',
        'client_id': 'e515195dfe0c6cf7eb2e7bfe05ab582e',
        'client_secret': 'c9a6b8752a4da88de6fd2af99cd530954d440e172bb09b1d7d6ebd9162dee135',
        'redirect_uri': 'https://afreecatv.com',
        'code': code? code : '',
        'refresh_token': !code? '4caede1aefcfdff10c597a99e7381f8df31b23e3' : '',
    });
    
    const config = {
        method: 'post',
        url: 'https://openapi.afreecatv.com/auth/token',
        headers: headers,
        data : data
    };

    console.log(config);

    axios(config)
        .then((res:any) => {
            //console.log('[Afreeca Auth Token]',res.data);

            console.log(res.data);

        })
        .catch((err:Error)=>{
            console.log('[ERROR: AXIOS in getToken]',err);
        });  
}

getTokenTest();