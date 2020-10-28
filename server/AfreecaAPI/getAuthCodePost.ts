import axios from 'axios';


const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': '*/*'
  };

function getAuthCodePost(param:any,callback:any):any{
    
    
    axios({
        url:'https://openapi.afreecatv.com/auth/code',
        method : 'post',
        headers : headers,
        params: { 
            "client_id":"e515195dfe0c6cf7eb2e7bfe05ab582e",
            "auth_type":"api",
            "certification_number": '536838',
            },
        }).then((res)=>{
            //console.log("GetAuthCodePost",res.data);
            if(callback && res.data.code){
                callback(res.data.code);
            }
                
        }).catch((err)=>{
            console.log('[ERROR in axios]',err);
            return false;

        })

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
}

export default getAuthCodePost;