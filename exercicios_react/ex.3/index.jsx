import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import {Primeiro, Segundo } from './component'

ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
    , document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/