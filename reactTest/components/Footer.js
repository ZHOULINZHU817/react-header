import React, { Component, PropsTypes } from 'react'
import CSSModules from "react-css-modules";
import styles from '../styles/footer.css'

class Footer extends Component {
    render() {
        return(
            <footer>
                <input type="text" styleName="text" />
                <button styleName="send">发表</button>
            </footer>
            )
    }
}

// export default Footer
export default CSSModules(Footer, styles)