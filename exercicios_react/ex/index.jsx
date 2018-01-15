import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import ClassComponent from './classComponent'

ReactDOM.render(
    <ClassComponent value='Componente Classe' />
    , document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/