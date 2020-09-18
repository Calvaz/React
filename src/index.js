import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Menu from './menu.js'
import './menu.css'

class Index extends React.Component{
  
  render() {
    return (
      <div>"Hello ciao"</div>
    )
  }
}

ReactDOM.render(<Menu />, document.getElementById('menu'));

export default Index;