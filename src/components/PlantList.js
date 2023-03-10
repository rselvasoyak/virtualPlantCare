
const PlantList = ({ 
        handleCompletedButton,
        handleRemovePlant,
        handleReset,
        containerRef,
        plants
     }) => {

    return(
        <>
            {
              plants.map((plant) => {
                const {key, name, waterFrequency, waterCount} = plant;
                const newWidth = `${(waterCount/waterFrequency) * 100}%`;
                const backgroundColor = waterCount === waterFrequency ? "#315e11" : "";
                return(
                  <li 
                    className="resultDisplay" 
                    ref={containerRef} 
                    key={key}
                  >
                    <div className="wrapper">
                      <h3>{name}</h3>
                      <div className="progressBox"> 
                        <div 
                          className= "progress"
                          style={
                            {
                              width: newWidth, 
                              "background-color": backgroundColor
                            }
                          }
                        >
                        </div>
                      </div>
                      <h4>{`${waterCount}/${waterFrequency}`} WATERED</h4>
                      <div className="plantButtons">
                        <button 
                          className='complete'
                          disabled={waterCount === waterFrequency ? true : false} 
                          onClick = { () => handleCompletedButton(plant) }
                        >
                          Completed
                        </button>

                        <button
                          className="remove" 
                          onClick = { () => {
                            handleRemovePlant(key)
                          }}
                        > 
                          Remove 
                        </button>

                        <button
                          className="reset" 
                          onClick = {() => handleReset(plant)}
                        >
                          Reset
                        </button>
                      </div> {/* Plant Button div Ending */}
                    </div>{/* Wrapper Ending */}
                  </li>
                )
              })
            }
        </>
    )
}

export default PlantList