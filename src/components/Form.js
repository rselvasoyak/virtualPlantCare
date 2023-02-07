const Form = ({
    waterChoice,
    handleWaterChoice,
    handleSubmit,
    handleResetWeek,
    userInput,
    handleInputChange 
    }
) => {
    return (
           <form>
              <div className="plantInfo">
                <div className="plantName">
                  <label htmlFor="plantName"> Plant Name </label>
                  <input 
                  type="text"
                  id="plantName"
                  onChange={ handleInputChange }
                  value={ userInput }
                  />
                </div>
                <div className="plantCare">
                    <label htmlFor="wateringFreq">Watering Frequency</label>
                    <select 
                    type="dropdown"
                    id="wateringFreq"
                    value = { waterChoice }
                    onChange={ handleWaterChoice }
                    defaultValue = "2"
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
                <button className="reset" onClick={ handleResetWeek }> Reset The Week </button>
            </form>
    )
}

export default Form;