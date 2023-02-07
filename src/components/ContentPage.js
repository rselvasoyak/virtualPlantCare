import Form from "./Form";
import PlantList from "./PlantList";
import { Link } from 'react-router-dom';

const ContentPage = (props) => {
    const {
        handleCompletedButton,
        handleInputChange,
        handleResetWeek, 
        handleRemovePlant,
        handleSubmit, 
        handleWaterChoice, 
        plants,
        userInput,
        waterChoice 
    } = props;
    return (
        <>
            <Link to="/">
                Back To Home Page
            </Link>
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
                />
                <PlantList 
                plants={plants}
                handleRemovePlant={handleRemovePlant}
                handleCompletedButton={handleCompletedButton}
                handleResetWeek={handleResetWeek}
                />
            </div>
            </section>
        </>
    )
}

export default ContentPage;