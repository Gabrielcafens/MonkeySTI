import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import comedyIcon from "../images/comedy.png";
import sci_fiIcon from "../images/sci_fi.png";
import horrorIcon from "../images/horror.png";
import romanceIcon from "../images/romance.png";
import actionIcon from "../images/action.png";
import thrillerIcon from "../images/thriller.png";
import dramaIcon from "../images/drama.png";
import mysteryIcon from "../images/mystery.png";
import crimeIcon from "../images/crime.png";
import animationIcon from "../images/animation.png";
import adventurerIcon from "../images/adventurer.png";
import fantasyIcon from "../images/fantasy.png";
import comedy_RomanceIcon from "../images/comedy_Romance.png";
import action_ComedyIcon from "../images/action_Comedy.png";
import superheroIcon from "../images/superhero.png";
  
function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to get started:</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    imgSrc={comedyIcon}
                    imgAlt="An illustration of a globe"
                    subject="Comedy"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sci_fiIcon}
                    imgAlt="An illustration of a shield"
                    subject="Sci-Fi"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={horrorIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Horror"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={romanceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Romance"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={actionIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Action"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={thrillerIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Thriller"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={dramaIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Drama"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={mysteryIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Mystery"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={crimeIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Crime"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={animationIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Animation"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={adventurerIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Adventurer"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={fantasyIcon}
                    imgAlt="An illustration of a meteor"
                    subject="fantasy"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={comedy_RomanceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Comedy Romance"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={action_ComedyIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Action Comedy"
                    onClick={onClick}
                />
                 <SubjectCard
                    imgSrc={superheroIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Superhero"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
