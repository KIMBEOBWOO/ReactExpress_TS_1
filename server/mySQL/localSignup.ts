const mysql = require('../config/database')();
const connection = mysql.init();
mysql.test_open(connection)

import express from 'express';

const localSignup = (id:string,pw:string) => {

}