/*
var express = require('express');
const { response } = require('express');
var router = express.Router();
var mysql = require('../config/database')();
*/
import express from 'express';
import passport from '../passport/passport'
import doQuery from '../mySQL/dpQuery';

const mysql = require('../config/database')();
const connection = mysql.init();
mysql.test_open(connection);

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('/users/login');
});

router.post('/login',passport.authenticate('local-login',{
}),(req,res)=>{
  res.send(true);
});

router.post('/signup',passport.authenticate('local-signup',{  
}),(req,res)=>{
  console.log("in signup : "+req);
  res.send(true);
});

router.post('/session',function(req,res,next){
  const sessionInfo = req.user;
  if(sessionInfo!=undefined){
    res.send(sessionInfo);
  }
  else{
    res.status(500);
  }
});

router.post('/logout',function(req,res,next){
  req.logOut();
  req.logout();
  res.sendStatus(200);
});

router.post('/delete',function(req,res,next){
  const sessionInfo = req.user;
  if(sessionInfo!=undefined){
    console.log(sessionInfo);
    // delete from query
    const sql = "DELETE FROM userinfo WHERE id = ?";
    const param = [sessionInfo];
    doQuery(sql,param)
      .then((row)=>{
        if(row){
          console.log("[DELETE USER] ID : "+sessionInfo);
          req.logout();
          res.send(200);
        }
        else{
          console.log("[SESSION ERROR]");
          res.sendStatus(500);
        }
      })
      .catch((err)=>{
        console.log(err);
        res.sendStatus(500);
      })
  }
  else{
    console.log("[SESSION ERROR]");
    res.sendStatus(500);
  }
});

router.post('/alluserinfo',function(req,res,next){
  var sql = "SELECT * FROM userinfo";

    connection.query(sql,null,function(err:Error,rows:any){
        if(err){
            console.log(err);
            res.send({
              result:false,
              userinfo : null
            });
        }
        else{
            if(rows.length > 0){
              res.json({
                result:true,
                userinfo : JSON.stringify(rows)
              })
            }
            else{
              res.send({
                result:false
              });
            }
        }
      });
});

export default router;
