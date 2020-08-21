import React, { Component } from 'react'
import TablaIMC from './TablaIMC'

class CuerpoIndice extends Component {
    constructor (props) {
        super(props);
        this.state = {
        card1: ["Bajo de peso"],
        card2: ["normal de peso"],
        card3: ["sobrepeso grado1"],
        card4: ["sobrepeso grado2"],
        card5: ["Obesidad tipo1"],
        card6: ["Obesidad tipo2"],
        card7: ["Obesidad tipo3 morvida"],
        card8: ["Obesidad tipo4 extrema"],
        
        }
    
    }
    render() {
        return (
            <div>
                <TablaIMC imc = "18.5" items={this.state.card1}/>
                <TablaIMC imc = "18.5 - 24.9" items={this.state.card2}/>
                <TablaIMC imc = "25 - 26.9" items={this.state.card3}/>
                <TablaIMC imc = "27 - 29.9" items={this.state.card4}/>
                <TablaIMC imc = "30 - 34.9" items={this.state.card5}/>
                <TablaIMC imc = "35 - 39.9" items={this.state.card6}/>
                <TablaIMC imc = "40 - 49.9" items={this.state.card7}/>
                <TablaIMC imc = "50" items={this.state.card8}/>
            </div>
    )
    }
    
}

export default CuerpoIndice