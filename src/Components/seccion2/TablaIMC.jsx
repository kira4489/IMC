import React,{Component}from 'react';
import PropTypes from 'prop-types'

class TablaIMC extends Component {
    // constructor(props){
    //     super(props)
    //    this.state = {}
    // }
    render(){
    return (
        <div>
            <table border="1" id="table">
           <tr>
               <th>{this.props.title}</th>
               <th>{this.props.description}</th>
            </tr>
            {this.props.items.map(item => (
                <tr>
                    <td>{item.numero}</td>
                    <td>{item.texto}</td>
                </tr>
            ))}
        </table>
        </div>
    )
    }
}

TablaIMC.proTypes = {
}

export default TablaIMC
