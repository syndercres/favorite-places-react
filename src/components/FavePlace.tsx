import './FavePlace.css';

interface FavePlaceProps {
    photo: string;
    title: string;
    location: string;
    map: string;
    description: string;
}

function FavePlace(props: FavePlaceProps): JSX.Element {
    return(
        <section className="fave-card">
            <div className="contents">
            <img src= {props.photo} className="image"></img>
            <h2>{props.title}</h2>
            <h3>{props.location}</h3>
            <a href={props.map}>map location</a>
            <p>{props.description}</p>
            </div>
        </section>
    );
}

export default FavePlace;