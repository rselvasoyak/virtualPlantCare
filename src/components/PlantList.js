import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';


const PlantList = ({ 
        handleCompletedButton,
        handleRemovePlant,
        containerRef,
        plants
     }) => {
      
  useEffect(() => {
    if (containerRef.current !== null) { 
      scroll.scrollTo(containerRef.current.offsetTop, {
        duration: 1500,
        smooth: true,
      });
    }
  }, [plants, containerRef]);
    return(
        <>
            {
              plants.map((plant) => {
                const { key, name, waterFrequency, waterCount } = plant;
                const newWidth = `${(waterCount/waterFrequency) * 100}%`
                return(
                  <li className="resultDisplay" ref={containerRef} key={key}>
                    <div className="wrapper">
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

                        <button
                          className="remove" 
                          onClick = { () => {
                            handleRemovePlant(key)
                          }}> Remove 
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