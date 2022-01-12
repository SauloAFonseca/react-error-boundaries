import React, {Fragment} from 'react';


const store = [{
  type: 'roupa'
}, {
  type: 'calçado'
}, {
  type: 'camiseta'
}]

function Column({ type }) {
  return (
    <tr>
      {/* type.name.console vai forçar a ocorrência de um erro.
      O correto seria haver somente type dentro das chaves. 
      <td>{ type }</td> 
      */}
      <td>{ type.name.console }</td> 
    </tr>
  )
}

function App() {
  const renderColumns = (element, key) => (
    <Fragment key={`column: ${key}`}>
      <Column type={element.type}/>
    </Fragment>
  )
  return (
    <table>
      {store.map(renderColumns)}
    </table>
  )
}

export default App;