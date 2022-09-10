import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
  const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%', borderRadius: 8, outline: 'none'}
  const textoDoRotulo = 'Nome:'
  const obterTextoDoBotao = () => "Enviar"
  return (
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', 
    padding:12, borderRadius: 8}}>
      <label className="rotulo" htmlFor="nome" style={{display: 'block', marginBottom: 4}}>{textoDoRotulo}</label>

    <input type="text" id='nome' style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none'}}></input>
    {/* Teste Comentário: para Windows o comando é CTRL + TECLA ; */}


    <button
    //sim
     onClick={obterTextoDoBotao}
    //sim
    onClick={() => obterTextoDoBotao()}
     //não
    onClick={obterTextoDoBotao}
    style={estilosBotao}>{obterTextoDoBotao()}</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')  
)