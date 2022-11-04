interface FavePlaceProps {
    photo: string;
    title: string;
    location: string;
   // map: string;
    description: string;
}

function FavePlace(props: FavePlaceProps): JSX.Element {
    return(
        <section>
            <img src= {props.photo}></img>
            <h2>{props.title}</h2>
            <h3>{props.location}</h3>
            <p>{props.description}</p>
        </section>
    );
}

export default FavePlace;