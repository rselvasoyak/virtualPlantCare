
import './App.css';

function App() {
  return (
   <main>
    <section className="homePage">
    <h1> Leaf-by-Leaf <span className="homeHeader">Let's Become</span> <span className="homeHeader">Better Plant Parents</span></h1>
    </section>
    {/* <section className="ContentPage">
    <h2>let's take care of them</h2>
    </section> */}
   </main>
  );
}

export default App;


// Pseudo Code 
// On page load the user lands to a page where there are:
		//Input form for plant name 
			// User name will be stored in a variable  
			//The data will be rendered on the page as a heading to the visual tracking chart. 

// On submit - the user will be taken to a second input section 
		// Goal: watering frequency per week 
			// value from the selected option will be stored in a variable 
			// This information will be stored in Firebase realtime database 
			// The value of the selection will be rendered on the page through the    real-time database received from Firebase. 

// Each time the user completes the goal - they click on the button underneath and it adds a visual cue that they completed one checkmark among however many they set for that week.
		 // the updated information will be stored in Firebase. 

// By the end of the week, the user can press 'How did I do?' button which  will turn conditionally render the color of the visual chart for green or red based on if they reached their goal or not. ../
