import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import RitornaStato from './ritorna.js'
import Oggetti from './oggetti.js'

class ale {
  name = "ale"
}

function ciao() {
  var a = 1;
  return a;
}

const myfirstelement = <p>"Hello ciao" {ale.name}</p>
const mysecondelement = React.createElement('p', {}, 'I do not use JSX!');
const mythirdelement = (<div>
                          <h1>I am a Header too.</h1>
                          <Oggetti cacca="pupù" numero="2"/>
                          <input className="andrea" type="text" value=""></input>
                          <button type="submit">invia</button>
                        </div>);


ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(mythirdelement, document.getElementById('ale'));
//ReactDOM.render(<RitornaStato />, document.getElementById('andre'));