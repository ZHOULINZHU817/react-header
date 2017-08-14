import React, { Component } from 'react'
import { Link } from 'react-router'
import CSSModules from "react-css-modules";
import styles from '../styles/header.css'



class Header extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return (
            <main>
               <div styleName="box1">
                  hahh
               </div>
            </main>
        )
    }
}
export default CSSModules(Header, styles)
// export default createCSSModules(Header, styles, {
//     allowMultiple: true
// });