import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';


function App() {
 
  
  const [itens, setItens] =  useState([])

   // Carregamento de dados via API (Backend)  
async function carregarDadosApi(){

  const apiUrl = 'https://rickandmortyapi.com/api/character/'

    // Preparar a requisição
    const response = await fetch(apiUrl)
    //console.log(response)

    const body = await response.json()
    console.log(body)

  // Extraindo a proporiedade results do body
  // Essa propriedade contém a lista de itens
  const results = body.results
  console.log(results)

  setItens(results)
 
}
useEffect(function(){
  
  //Chamando a função que carrega dados da API
  carregarDadosApi()
}, [])

  return (
    <>
      <div className="cards">
       
        {itens.map((item,i) => <Card item={item} key={i} />)}
       
      </div>
    </>
  )
}

export default App
