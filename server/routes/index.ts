import express from 'express';
//import getAuthCode from '../AfreecaAPI/getAuthCode';
import getAuthCodePost from '../AfreecaAPI/getAuthCodePost';
//import getAuthToken from '../AfreecaAPI/getAuthToken';

const afreecaAuthCode = require('../AfreecaAPI/getAuthCode');
const afreecaAuthToken = require('../AfreecaAPI/getAuthToken');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getCode',(req,res)=>{
  //  promise 로 만들기
  afreecaAuthCode.getCodeRequest((url:string)=>{
    res.redirect(url);
  });

});


router.get('/getCodePost',(req,res)=>{
  const authNumber = '384652';

  afreecaAuthCode.postCodeRequest(authNumber,()=>{
    res.send('ok');
  });

});


router.get('/getToken',(req,res)=>{
  const authNumber = req.query.authNumber;
  console.log('req.params',authNumber);

  afreecaAuthToken.postTokenRequest(authNumber,(url:string)=>{

    res.send('[POST API LOGIN , get Token SUCCESS]');
  });

});


export default router;





// axios.post('https://openapi.afreecatv.com/auth/code',null,{
//     headers,
//     params:{"client_id":"e515195dfe0c6cf7eb2e7bfe05ab582e","auth_type":"api","certification_number":840465}
//     }
//     ).then((res)=>{
//         console.log(res);        
//     });

// axios({
//     url:'https://openapi.afreecatv.com/auth/code',
//     method : 'post',
//     headers : headers,
//     params: { 
//         "client_id":"e515195dfe0c6cf7ebxxxxxxxx",
//         "auth_type":"api",
//         "certification_number": '111111',
//     },
// }).then((res)=>{
//     console.log(res);        
// });

// axios.get('https://openapi.afreecatv.com/auth/code',{
 
//   params: { 
//               "client_id":"e515195dfe0c6cf7ebxxxxxxxx",
             
//           },
// }).then((res)=>{
//       console.log(res);        
//   });
