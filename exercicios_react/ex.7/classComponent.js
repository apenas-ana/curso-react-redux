import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue }
    }

    sum(delta) {
        this.setState( {value: this.state.value + delta } ) // evoluindo o state. state recebe novo objeto. Assim se salva o histórico de mudanças
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.state.value}</h2>
                <button onClick={ () => this.sum(-1) }>Dec</button>
                <button onClick={ () => this.sum(1) }>Inc</button>
            </div>
        )
    }
}

/*
export default class ClassComponent extends React.Component {    
}
*/
