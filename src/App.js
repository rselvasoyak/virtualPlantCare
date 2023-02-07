/* Modules */
import { useState, useEffect, useRef } from 'react';
/* Components  */
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove, update} from 'firebase/database';
import Header from './components/Header';
import Form from './components/Form';
import PlantList from './components/PlantList';
import Footer from './components/Footer';
/* Assets/Styling */
import './App.scss';

function App() {
  // State
  const [plants , setPlants] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [waterChoice, setWaterChoice] = useState("0");

  // Plant Name Input Change
  const handleInputChange = (e) => {
      setUserInput(e.target.value);
  }

  // Scroll down to the container
  const scrollDown = (containerRef) => {
    containerRef.current.scrollIntoView({ 
      behavior: "smooth", 
      block: "start" 
    });
  }

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
      scrollDown(containerRef);
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

  // Scrolling down to the new plant 
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current !== null) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }, [plants]);

  return (
    <>
      <main>
      <Header/>
        <section className="contentPage">
          <div className="wrapper">
            <div className="h2">
              <h2>let's take care of them</h2>
            </div>
          <Form 
          waterChoice = { waterChoice}
          handleWaterChoice = { handleWaterChoice }
          handleSubmit = { handleSubmit }
          handleResetWeek = { handleResetWeek }
          userInput = { userInput }
          handleInputChange = { handleInputChange }
          />
          <PlantList 
            plants={plants} 
            handleRemovePlant={handleRemovePlant} 
            handleCompletedButton={handleCompletedButton} 
            handleResetWeek={handleResetWeek}  
          />
          </div> {/* End of wrapper */}
        </section> {/* End of Content Page */}
      </main>
      <Footer />
    </>
  );
}

export default App;


// Pseudo Code 
// On page load the user lands to a page where there are:
		//Input form for plant name 
			// Get and store the 'plantName' data in a STATE that will be connected to Firebase. 
      // Make API call to Firebase - useEffect - axios? 
			//Render the name on the page as a heading to the visual tracking chart. 

// On submit - the user will be taken to a second input section 
		// Goal: watering frequency per week 
    // When user selects the option 
      // Get and store the "value" for "watering frequency" data in a STATE that will be connected to Firebase. 
      // Make API call to Firebase - useEffect - axios? 

    //on click to "completed button" - conditionally render the visual goal tracker.  How to give the button different role based on the input? 
			// This information will be stored in Firebase realtime database 
			// The value of the selection will be rendered on the page through the    real-time database received from Firebase. 

// Each time the user completes the goal - they click on the button underneath and it adds a visual cue that they completed one checkmark among however many they set for that week.
		 // the updated information will be stored in Firebase. 

// By the end of the week, the user can press 'How did I do?' button which  will turn conditionally render the color of the visual chart for green or red based on if they reached their goal or not. ../









