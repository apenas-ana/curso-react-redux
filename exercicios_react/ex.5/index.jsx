import React from 'react'
import ReactDOM from 'react-dom' // o DOM só é necessário aqui
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Silva'>
        <Member name='Guilherme' />
        <Member name='Rafael' />
        <Member name='Julia' />        
    </Family>
    , document.getElementById('app')
)

// Exemplo com jQuery
/*
const list = $('<ul>')
const item = $('<li>').attr(...)
list.append(item1)
*/