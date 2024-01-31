import './App.css';
import Card from './components/Card/Card';
import Tag from './components/Tag/Tag'

function App() {
  //Carregamento de dados via Código
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }
  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }
  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  }
  const item4 = {
    name: 'Beth Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  }

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

  
}

  carregarDadosApi()
  // const list1 = {
  //   status: 'Status: Vivo',
  //   especie: 'Especie: Humano',
  //   origem: 'Origem: Terra C-137'
  // }
  // const list2 = {
  //   status: 'Status: Vivo',
  //   especie: 'Especie: Humano',
  //   origem: 'Origem: Terra C-137'
  // }
  // const list3 = {
  //   status: 'Status: Vivo',
  //   especie: 'Especie: Humano',
  //   origem: 'Origem: Terra C-137'
  // }
  // const list4 = {
  //   status: 'Status: Vivo',
  //   especie: 'Especie: Humano',
  //   origem: 'Origem: Terra C-137'
  // }

  const itens = [item1, item2, item3, item4]
  //const lists = [list1, list2, list3, list4]

  return (
    <>
      <div className="cards">
       
        {itens.map((item,i) => <Card item={item} key={i} />)}

       {/*{lists.map(list => <Tag list={list} />)} */}

      </div>
    </>
  )
}

export default App
