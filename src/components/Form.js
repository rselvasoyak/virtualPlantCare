import { Link } from 'react-router-dom';

const Form = ({
    handleInputChange,
    handleSubmit,
    handleWaterChoice,
    userInput,
    waterChoice
    }
) => {
    return (
           <form>
              <div className="plantInfo">
                <div className="plantName">
                  <label htmlFor="plantName"> Plant Name </label>
                  <input 
                  id="plantName"
                  type="text"
                  onChange={handleInputChange}
                  value={userInput}
                  />
                </div>
                <div className="plantCare">
                    <label htmlFor="wateringFreq">Watering Frequency</label>
                    <select 
                    id="wateringFreq"
                    type="dropdown"
                    onChange={handleWaterChoice}
                    value = {waterChoice}
                    required>
                      <option value ="0" disabled> Watering Frequency </option>
                      <option value="1">1 time per week</option>
                      <option value="2">2 times per week</option>
                      <option value="3">3 times per week</option>
                    </select>
                </div>{/* plant care ending */}
              </div>
                <button className="add" 
                onClick={ handleSubmit }> Add </button>
                <Link to="/" className="backToHome">
                    Back To Home Page 
                </Link>
            </form>
    )
}

export default Form;