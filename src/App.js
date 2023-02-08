/* Modules */
// import { useState, useEffect, useRef } from 'react';
// /* Components  */
// import firebase from './firebase';
// import { getDatabase, ref, onValue, push, remove, update} from 'firebase/database';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContentPage from './Components/ContentPage';
import Footer from './Components/Footer';
/* Assets/Styling */
import './App.scss';

function App() {
  return (
      <main>
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/contentPage" element={ 
          <ContentPage/> }/>
        </Routes>
        <Footer />
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









