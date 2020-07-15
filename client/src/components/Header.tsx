import React,{Component, useState, Dispatch, SetStateAction, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Header(){
    return(
        <div>
            <h1>Header Component</h1>
        </div>
    )
}

export default Header;