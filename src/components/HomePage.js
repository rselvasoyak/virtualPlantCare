import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <section className="homePage">
            <h1> Leaf-by-Leaf <span className="homeHeader">Let's Become</span> <span className="homeHeader">Better Plant Parents</span></h1>
            <Link to="/contentPage">
                <button className="changePage">Let's Do It!</button>
            </Link>
        </section>
    )
}

export default HomePage;