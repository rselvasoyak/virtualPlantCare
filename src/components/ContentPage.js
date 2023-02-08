import { useState, useEffect, useRef } from 'react';
/* Components  */
import firebase from '../firebase';
import { getDatabase, ref, onValue, push, remove, update} from 'firebase/database';
import Form from "./Form";
import PlantList from "./PlantList";

const ContentPage = () => {
  // Statefuk Variables 
  const [plants , setPlants] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [waterChoice, setWaterChoice] = useState("0");

  // Functions in Event Order 
    // Plant name input change when user inputs the plant name 
    const handleInputChange = (e) => {
        if (e.target.value.length <= 20) {
              setUserInput(e.target.value);
          }
    }
    
    // Water Frequency Choice through the dropdown menu
    const handleWaterChoice = (waterFreq) => {
      setWaterChoice(waterFreq.target.value);
    } 

    const containerRef = useRef(null);
    // When user clicks on the "add" button- info gets stored in Firebase
    const handleSubmit = (e) => {
      e.preventDefault();
        if (userInput.trim().length !== 0 && waterChoice !== "0") {
            const database = getDatabase(firebase);
            const dbRef = ref(database);
            push(dbRef, {
              name: userInput,
              waterFrequency: parseInt(waterChoice), 
              waterCount: 0,
            });
            setUserInput('')
            setWaterChoice("0");
          } else {
            alert(`Please Name Your Plant Baby and Select Watering Frequency`)
          }
          
          return;
    }

    // Completed Button
    const handleCompletedButton = (plant) => {
      const { waterCount, key } = plant;
      const database = getDatabase(firebase);
      const dbRef = ref(database, `/${key}`);
      update( dbRef, {
        ...plant, 
        waterCount: waterCount + 1
      })
    }
    
    // Deleting the Plant from Firebase and triggering rerendering through state
    const handleRemovePlant = (plantKey) => {
      const database = getDatabase(firebase);
      const dbRef = ref(database, `${plantKey}`);
      remove(dbRef);
    }

  useEffect(() => {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

    onValue ( dbRef , (response) => {
      const plants = response.val();
      const newPlants = []; 

      for (let key in plants) {
        newPlants.push({key: key, ...plants[key]})
      }
      setPlants(newPlants);
    })
  }, [])
    return (
        <>
            <section className="contentPage">
            <div className="wrapper">
                <div className="h2">
                <h2>let's take care of them</h2>
                </div>
                <Form 
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  handleWaterChoice={handleWaterChoice}
                  plants = {plants}
                  waterChoice={waterChoice}
                  userInput={userInput}
                />
                <ul>
                    <PlantList 
                    handleCompletedButton={handleCompletedButton}
                    handleRemovePlant={handleRemovePlant}
                    containerRef = {containerRef}
                    plants={plants}
                    />
                </ul>
            </div>
            </section>
        </>
    )
}

export default ContentPage;