import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import SilvaFamily from './silvaFamily'

ReactDOM.render(
    <SilvaFamily />
    , document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/