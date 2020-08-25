import React from 'react'
import PropTypes from 'prop-types';

function VerCalculoImc(props) {
    let imc = calcularIMC(props).toFixed(2);
    return (
        <div className="column">
            <h3>Imc</h3>
           <h3>{imc}</h3>
        </div>
    )
}
function calcularIMC({peso,altura}){
    return peso / Math.pow(altura,2);
}

// function calcularImc({peso,altura}){
// return peso/altura
// }

VerCalculoImc.propTypes = {
  peso : PropTypes.number.isRequired,
  altura: PropTypes.number.isRequired
  // if(props.altura < 10 || props.altura > 20){
  //   return new Error(
  //       'La propiedad `' + propName + '` en el componente' +
  //       ' `' + componentName + '`. No se encuentra en el rango de  10 - 20.'
};

export default VerCalculoImc
