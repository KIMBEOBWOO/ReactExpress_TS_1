import React from 'react';
import {Button ,TextField, Grid , Container} from '@material-ui/core';


export default function API():JSX.Element {
    const [authNumber,setAuthNumber] = React.useState(""); 

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setAuthNumber(e.target.value);
    };

    return(
       <div style={{marginTop:"100px"}}>
           <Grid container direction="column" spacing={5} alignItems="center">
               <Grid item xs={4}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        href="http://localhost:5000/getCode/"
                        >
                        아프리카 TV 로그인하기
                    </Button>
               </Grid>
               <Grid item container xs={4} alignItems="center" direction="column">
                   <Grid item>
                    <TextField
                            label="아프리카 TV 앱 인증번호"
                            value={authNumber}
                            onChange={onChange}
                        />
                   </Grid>
                    <Grid item>
                        <Button 
                            variant="contained" 
                            href= {"http://localhost:5000/getToken?authNumber="+authNumber}
                            color="secondary"
                            >
                            아프리카 TV 모바일 인증번호 로그인하기
                        </Button>
                    </Grid>
                   
               </Grid>
            </Grid>
       </div>
    );
}