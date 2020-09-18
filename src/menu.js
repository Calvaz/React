import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index.js';
import Andrea from './andrea.js'
import Alessandra from './alessandra.js'
import Film from './film.js'

import './menu.css'

class Menu extends React.Component {
    

    changePage = (page) => {
        ReactDOM.render(page, document.getElementById('body'));
    }

    render() {
        return (
            <div>
                <button class="menu"><a onClick={() => this.changePage(<Index />)}>Index</a></button>
                <button class="menu"><a onClick={() => this.changePage(<Andrea />)}>Andrea</a></button>
                <button class="menu"><a onClick={() => this.changePage(<Alessandra />)}>Alessandra</a></button>
                <button class="menu"><a onClick={() => this.changePage(<Film />)}>Film</a></button>
            </div>
        )
    };
}

export default Menu;
