import './Card.css';

function Card(props) {
    //console.log(props)

    const item = props.item

    //console.log(item)
   
    return(
        <>

        <div className="card">
            <h2>{item.name}</h2>

            
                {/*//TODO: Arrumar as tags  
                <div className="tags">
                    <div className='tag'>Status: Vivo</div> 
                    <div className='tag'>Especie: Humano</div>   
                    <div className='tag'>Origem: Terra C-137</div> 
                </div> */}

            <img src={item.image}/>
       </div>
       </>
    )
}

export default Card