import React, { Component } from 'react'
import VerCalculo from './VerCalculoimc';
import FormularioCalculo from './FormularioCalculo'
export default class IMC extends Component {
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
                <FormularioCalculo C_IMC = {this} App = {this.props.App}/>
                <VerCalculo altura={this.state.altura} peso={this.state.peso}/>
            </>
        );
    }
}