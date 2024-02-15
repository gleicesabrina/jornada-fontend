import './Card.css';


function Card(props) {

    const item = props.item
    
   
    return(
        <>

        <div className="card">
            <h2>{item.name}</h2>
            
            <div className="tags">
                <div className='tag'>{item.status}</div>
                <div className='tag'>{item.gender}</div>
                <div className='tag'>{item.species}</div>
                <div className='tag'>{item.origin.name}</div>
            </div>
        
            <img src={item.image}/>
       </div>
       </>
    )
}

export default Card