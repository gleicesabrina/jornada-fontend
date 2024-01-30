import './Card.css';

function Card () {
    return(
        <>

        <div className="card">
            <h2>Rick Sanchez</h2>

                <div className="tags">
                    <div className='tag'> Status: Vivo</div> 
                    <div className='tag'>Especie: Humano</div>   
                    <div className='tag'>Origem: Terra C-137</div> 
                </div>

            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
       </div>
       <div className="card">
            <h2>Morty Smith </h2>

                <div className="tags">
                    <div className='tag'> Status: Vivo</div> 
                    <div className='tag'>Especie: Humano</div>   
                    <div className='tag'>Origem: Terra C-137</div>
                </div> 
                
            <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"/>
       </div>
       </>
    )
}

export default Card