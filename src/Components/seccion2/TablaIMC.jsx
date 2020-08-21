import React from 'react'

function TablaIMC({imc, items}) {
    return (
        <div>
            <table border="1" id="table">
           <tr>
               <td>{imc}</td>
               <td>{items}</td>
            </tr>
        </table>
        </div>
    )
}

export default TablaIMC