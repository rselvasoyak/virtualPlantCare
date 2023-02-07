const PlantList = ({ 
        plants, 
        handleRemovePlant,
        handleCompletedButton
     }) => {
    return(
        <ul>
            <li>
            {
                  plants.map((plant) => {
                    const { name , key, waterFrequency, waterCount } = plant;
                    const newWidth = `${(waterCount/waterFrequency) * 100}%`
                    return(
                      <section className="resultDisplay">
                        <div className="wrapper" key={key}>
                          <h3>{name}</h3>
                          <div className="progressBox"> 
                            <div className="progress" style={{"width": newWidth}}></div>
                          </div>
                          <div className="plantButtons">
                            <button 
                            className='complete'
                            disabled={waterCount === waterFrequency ? true : false} 
                            onClick = { () => handleCompletedButton(plant) }
                            >
                              Completed
                            </button>
                            <button className="remove" onClick = { () => {
                              handleRemovePlant(key)
                            }}> Remove </button>
                          </div>
                        </div>
                      </section>
                    )
                  })
                }
            </li>
        </ul>
    )
}

export default PlantList