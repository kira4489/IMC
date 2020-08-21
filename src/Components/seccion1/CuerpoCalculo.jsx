import React from 'react';
import FomularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoImc';
import BasculaImc from './Bascula';

export default function CuerpoCalculo() {
    return (
        <section className="panel-block">
       <article className="columns is-mobile">
   <FomularioCalculo nombres={["oscar","cristian","monica","andrea"]} html={<input type="number"/>}/>
   <VerCalculo altura={15} peso={89}/>
   <BasculaImc />
    </article>
    </section>
       
    )
}


