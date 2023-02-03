/* Modules */
import { useState, useEffect } from 'react';
/* Components  */
import firebase from './firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';
/* Assets/Styling */
import './App.scss';

function App() {
  // State
  const [plantName , setPlantName] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Plant Name Input Change
  const handleInputChange = (e) => {
      setUserInput(e.target.value);
  }

  // Store the state in Firebase 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput)
    
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, userInput);
    setUserInput('')
  }

  // Deleting the Plant
  const handleRemovePlant = (plantKey) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `${plantKey}`);
    remove(dbRef);
  }

  // useEffect - use useEffect to run side effects each time the component mounts.
  useEffect(() => {
      const database = getDatabase(firebase);
      const dbRef = ref(database);

    onValue ( dbRef , (response) => {
      const plantInfo = response.val();
      const newPlantInfo = []; 

      for (let key in plantInfo) {
        newPlantInfo.push({key: key, name: plantInfo[key]})
      }
      setPlantName(newPlantInfo);
    })

  }, [])
   
  return (
   <main>
    {/* <section className="homePage">
    <h1> Leaf-by-Leaf <span className="homeHeader">Let's Become</span> <span className="homeHeader">Better Plant Parents</span></h1>
    </section> */}
    <section className="contentPage">
      <div className="wrapper">
        <h2>let's take care of them</h2>
        <form>
          <div className="plantName">
            <label htmlFor="plantName"> Plant Name </label>
            <input 
            type="text"
            id="plantName"
            onChange={handleInputChange}
            value={userInput}
            />
            <button className="check" onClick={handleSubmit}> Add </button>
          </div>
          <div className="plantCare">
              <label htmlFor="wateringFreq">Watering Frequency</label>
              <select 
              type="dropdown"
              id="wateringFreq"
              defaultValue = "How frequently do you need to water your plant?"
              required>
                <option value= "How frequently do you need to water your plant?"  disabled></option>
                <option value="1">1 time per week</option>
                <option value="2">2 times per week</option>
                <option value="3">3 times per week</option>
              </select>
          </div>
        </form>

        {/* <div className="visualTracker">
          <h3>Inputted Plant Name</h3>
          <div className="resultDisplay">
            <div className='onePerWeek'>
                <p>You made your water happy! </p>
            </div>
            <div className='twoPerWeek'>
                <p>You made your water happy! </p>
                <p>You made your water happy! </p>
            </div>
            <div className='threePerWeek'>
                <p>You made your water happy! </p>
                <p>You made your water happy! </p>
                <p>You made your water happy! </p>
                <p>You made your water happy! </p>
                <p>You made your water happy! </p>
            </div>
          </div>
        </div> */}

        <button> Reset The Week </button>

        {
          plantName.map((plantsName) => {
            return(
              <div key={plantsName.key}>
                <h2>{plantsName.name}</h2>
                <div className="visualTracker">Container</div>
                <button onClick = { () => {
                  handleRemovePlant(plantsName.key)
                }}> Remove </button>
              </div>
            )
          })
        }
      </div> {/* End of wrapper */}
    </section> {/* End of Content Page */}
   </main>
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









