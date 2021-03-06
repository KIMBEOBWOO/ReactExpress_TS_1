/*
var createError = require('http-errors');
//var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const PORT = 5000;
*/

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import path from 'path'
import createError from 'http-errors';
import session from 'express-session';
import passport from 'passport';
//import passportConfig from './passport/passport';
import usersRouter from './routes/users';
import indexRouter from './routes/index';

class ServerApi{
  public app : express.Express

  constructor(){
    this.app = express();
    this.initializeAppSettings();
    this.initializeRouters();
  }

  private initializeAppSettings():void{
    this.app.use(session({
      secret:"beobwoo",
      resave:false,
      saveUninitialized: false,
      cookie:{
        
      }
    }));
    this.app.engine('html', require('ejs').renderFile);

    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended : false}));
    
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));

    this.app.use(session({ secret: '비밀코드', resave: true, saveUninitialized: false }));
    this.app.use(passport.initialize()); // passport 구동
    this.app.use(passport.session()); // 세션 연결
  }

  private initializeRouters():void{
    this.app.use('/', indexRouter);
    this.app.use('/users', usersRouter);
    
    this.app.use(function(req, res, next) {
      next(createError(404));
    });

    interface Err{
      status?: number;
      stack?: string;
      message?: string;
    }
    
    this.app.use((
      err: Err, req: express.Request, res: express.Response, next: express.NextFunction
    ) => {

      const serverErrorMessage = 'Internal Server Error';
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
      if (err) {
        if (process.env.NODE_ENV === 'development') {
          console.log(err.stack);
        }
      
        res.status(err.status || 500);
        res.send({
          code: err.status,
          message: err.message || serverErrorMessage
        });
      }
    });
  }
}

module.exports = ServerApi;