import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import Component from './component'

ReactDOM.render(
    <Component value='Show!'/>,
    document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/