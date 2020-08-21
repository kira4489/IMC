import React from 'react';
import Cabecera from './CabeceraCalculo';
import Cuerpo from './CuerpoCalculo';
import CabeceraIndice from '../seccion2/CabeceraIndice';

function MiComponente(){
  return (
 <section className="panel">
   <Cabecera titulo="Calculadora" 
   nombre_clase="cabecera_calculo"/>
   
   <Cuerpo />
   <CabeceraIndice />
 </section>
  );
}


export default MiComponente;

