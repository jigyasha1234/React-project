import React from 'react'

function MenuCard(props){
    const menuData=props.menuData;

    return (
    <div>
    <section className='main-card--cointainer' >
        {menuData.map((item) => {
            const {id,category,name,description,price,image,} = item
            return(
                <>
                    
            <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{id}</span>
            <span className="card-author subtle">{category}</span>
            <h2>{name}</h2>
            <span className="card-description subtle">
            {description}
            </span>
            <div className="card-read">{price}</div>
          </div>
          <img src={image} alt="img" className="card-media"></img>
          <span className="card-tag subtle">Order Now</span>
        </div>
      </div>
                </>
            )
        })}
    </section>
    </div>
    )
}

export default MenuCard
