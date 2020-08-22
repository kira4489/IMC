import React,{Component} from 'react';
import CuerpoIndice from './CuerpoIndice';

class DetalleIMCApp extends Component{
    constructor(props){
        super(props)
       this.state = {
         numero : 10,
         edad: props.edad
        }
        // this.sumar = this.sumar.bind(this)
    }
    // saludar(e){
    //   alert("hola")
    //   console.log(e)
    // }
    sumar = (e) => {
        this.numero += 1;
        this.setState({numero :this.state.numero + 1})
    }

    render() {
         return (
           <section>
               <h1>Detalle del componente</h1>
               <button onClick={this.sumar}>
                {/* //  alert("hola")
                //  console.log(e) */}
              Sumar</button>
              <input type="text" onBlur={e =>{
             console.log("hola!!")  
            }}/>
    <p>numero = {this.state.numero}</p>
    <CuerpoIndice />
           </section>
         
         );
    }
    hola(){
        console.log("hola desde clase detalle Imcapp")
    }
}

export default DetalleIMCApp;