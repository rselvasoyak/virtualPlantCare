// import { useEffect/* , useRef */ } from 'react';

// import Element from "react-scroll";
const PlantList = ({ 
        plants, 
        handleRemovePlant,
        handleCompletedButton
     }) => {
      
  // Scrolling down to the new plant 
  //   const containerRef = useRef(null);
  //   useEffect(() => {
  //   if (containerRef.current !== null) { 
  //     containerRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start"
  //     });
  //   }
  // }, [plants]);
  
    return(
        <>
            {
                  plants.map((plant) => {
                    const { name , key, waterFrequency, waterCount } = plant;
                    const newWidth = `${(waterCount/waterFrequency) * 100}%`
                    return(
                      <li className="resultDisplay" /* ref={containerRef} */ key={key}>
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