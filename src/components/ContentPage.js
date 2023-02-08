import { useState, useEffect, useRef } from 'react';
/* Components  */
import firebase from '../firebase';
import { getDatabase, ref, onValue, push, remove, update} from 'firebase/database';
import Form from "./Form";
import PlantList from "./PlantList";

const ContentPage = () => {
      // State
  const [plants , setPlants] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [waterChoice, setWaterChoice] = useState("0");

  // Plant Name Input Change
  const handleInputChange = (e) => {
      setUserInput(e.target.value);
  }
  
  const containerRef = useRef(null);
  // Store the state in Firebase 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (waterChoice !== "0") {
      const database = getDatabase(firebase);
      const dbRef = ref(database);
      push(dbRef, {
        name: userInput,
        waterFrequency: parseInt(waterChoice), 
        waterCount: 0,
      });
      setUserInput('')
      setWaterChoice("0");
      // scrollDown(containerRef);
    } else {
      alert(`Please Choose How Frequently You Want To Water Your Plant`)
    }
  }
  
  // Water Frequency Change - Conditions 
  const handleWaterChoice = (waterFreq) => {
    setWaterChoice(waterFreq.target.value);
  } 
  
  // Deleting the Plant
  const handleRemovePlant = (plantKey) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${plantKey}`);
    remove(dbRef);
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
  // Reset the Week Button 
   const handleResetWeek = () => {
    console.log("Resetting")
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
                waterChoice={waterChoice}
                handleWaterChoice={handleWaterChoice}
                handleSubmit={handleSubmit}
                handleResetWeek={handleResetWeek}
                userInput={userInput}
                handleInputChange={handleInputChange}
                plants = {plants}
                />
                <ul>
                    <PlantList 
                    plants={plants}
                    handleRemovePlant={handleRemovePlant}
                    handleCompletedButton={handleCompletedButton}
                    handleResetWeek={handleResetWeek}
                    containerRef = {containerRef}
                    />
                </ul>
            </div>
            </section>
        </>
    )
}

export default ContentPage;