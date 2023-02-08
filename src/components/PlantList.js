import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

// import Element from "react-scroll";
const PlantList = ({ 
        plants, 
        handleRemovePlant,
        handleCompletedButton,
        containerRef
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
                    const { name , key, waterFrequency, waterCount } = plant;
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
                            <button className="remove" onClick = { () => {
                              handleRemovePlant(key)
                            }}> Remove </button>
                          </div>
                        </div>
                      </li>
                      // </Element>
                    )
                  })
                }
        </>
    )
}

export default PlantList