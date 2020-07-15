/*
var express = require('express');
const { response } = require('express');
var router = express.Router();
var mysql = require('../config/database')();
*/
const passport = require('passport');
const mysql = require('../config/database')();
const connection = mysql.init();
mysql.test_open(connection)

import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('/users/login');
});

router.post('/login',function(req,res){
  var user = req.body.userInfo;
  
  if(user != undefined){
    console.log(user.id + " want login!");
    var sql = "SELECT * FROM userinfo WHERE id = ? && pw = ?";

    connection.query(sql,[user.id,user.pw],function(err:Error,rows:any){
        if(err){
            console.log(err);
        }
        else{
            console.log(rows);
            if(rows.length > 0){
              console.log(user.id + " can login!");
              res.send({
                result:true
              });
            }
            else{
              console.log(user.id + " doens't exist!");
              res.send({
                result:false
              });
            }
        }
    });
  };
});

router.post('/signup',function(req,res){
  var user = req.body.userInfo;
  
  if(user != undefined){
    console.log(user);
    
    var sql = 'INSERT INTO userinfo(id,pw,name) VALUES(?,?,?)';
    var params = [user.id,user.pw,user.name];

    connection.query(sql,params,function(err:Error,rows:any,fields:any){
        if(err){
            console.log(err);
        }
        else{
            console.log("insert ok");
            res.send({
              result:true
            });
        }
    });  
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
            console.log(rows);
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

router.post('/passport',passport.authenticate('local',{
}),(req,res)=>{
  res.send({
    result : true
  })
})
export default router;
