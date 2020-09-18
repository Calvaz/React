import React from 'react';
import Oggetti from './oggetti.js'

function RitornaStato() {
    return <h1>'a' + {Oggetti.state.name}</h1>
}

export default RitornaStato;