import React, { Component } from 'react'
import VerCalculo from './VerCalculoImc';
import FormularioCalculo from './FormularioCalculo'
class IMC extends Component {
    constructor(props){
        super(props);
        this.state={
            peso:0,
            altura:1
        }
    }
    render() {
        return (
            <>
            <FormularioCalculo C_IMC= {this} /> 
            <VerCalculo altura={this.state.altura} peso={this.state.peso}/>
            </>
        )
    }
}
export default IMC