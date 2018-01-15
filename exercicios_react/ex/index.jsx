import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import Field from './Field'

ReactDOM.render(
    <Field label='Teste' initialValue='Teste' />
    , document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/