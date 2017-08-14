import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import './styles/header.css'
ReactDOM.render(
    <div className="main">
        <Header/>
        <Footer/>
    </div>
    ,document.getElementById('root'))
