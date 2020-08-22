import React from 'react'
import PropTypes from 'prop-types';

function FormularioCalculo(props) {
    console.log(props);
    let {
        nombres
    } = props;
    
    console.log();
    return (
        <div className="column">
            <label htmlFor="peso">Peso (kilos)</label>
            {props.html}
            <input type="number" name="peso" id="peso" className="caja_texto"/>
            <br/>
            <label htmlFor="">Altura (cm)</label>
            <input type="number" name="altura" id="altura" className="caja_texto"/>
            <ul id="lista">
            {nombres.map((nombre,index) => {
                return <li key={index}>{nombre}</li>
            })}
            </ul>
        </div>
    )
}

FormularioCalculo.proTypes ={
 html : PropTypes.element.isRequired,
 nombres : PropTypes.array,
 notas : PropTypes.object,
 micompontenver: PropTypes.object
}

export default FormularioCalculo
