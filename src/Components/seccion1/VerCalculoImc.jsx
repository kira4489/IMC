import React from 'react'
import PropTypes from 'prop-types';

function VerCalculoImc(props) {
    let imc = props.peso/props.altura
    return (
        <div className="column">
            <h3>Imc</h3>
           <h3>{imc}</h3>
        </div>
    )
}
VerCalculoImc.propTypes = {
  peso : PropTypes.number.isRequired,
  altura: function(props,propName,componentName){
  if(props.altura < 10 || props.altura > 20){
    return new Error(
        'La propiedad `' + propName + '` en el componente' +
        ' `' + componentName + '`. No se encuentra en el rango de  10 - 20.'
    )
  }

  },


};

export default VerCalculoImc
