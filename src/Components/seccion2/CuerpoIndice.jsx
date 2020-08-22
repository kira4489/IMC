import React, { Component } from 'react'
import TablaIMC from './TablaIMC'

class CuerpoIndice extends Component {
    constructor (props) {
        super(props);
        this.state = {
            table1: [
            {numero: "18.5", texto: "Bajo de peso"},
            {numero: "18.5 - 24.9", texto: "normal de peso"},
            {numero: "25 - 26.9", texto: "sobrepeso grado1"},
            {numero: "27 - 29.9", texto: "sobrepeso grado2"},
            {numero:  "30 - 34.9", texto: "Obesidad tipo1"},
            {numero:  "35 - 39.9", texto: "Obesidad tipo2"},
            {numero:  "40 - 49.9", texto: "Obesidad tipo3 morvida"},
            {numero:  " mayor 50", texto: "Obesidad tipo4 extrema"},
        ],
    }
    
    }
    render() {
        return (
            <div>
                <TablaIMC items={this.state.table1} title="Imc" description="situacion"/>
            </div>
    )
    }
    
}

export default CuerpoIndice