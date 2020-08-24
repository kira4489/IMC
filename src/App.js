import React, { Component } from 'react';
import Componente1 from './Components/seccion3/CalculadorApp'
import Componente2 from './Components/seccion2/DetalleIMCApp'
	
class App extends Component {
	constructor(props){
    super(props);
    this.state = {
      imc : 0
    }
  }
  render() {
    return (
      <div>
        <Componente1 App = {this}/>
        <Componente2 nombre = "oscar" apellido = "mesa" edad = {29} App = {this}/>
      </div>
    );
  }
}

export default App;
