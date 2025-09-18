import { MOVIES } from "../assets/moviesData";
import { stylesCard } from "../styles/style";
import FavoriteButton from "./FavoriteButton";


function Card({ image, rating, name }) {
    return (
        <div>
            <div className="bg-blue-500">{name}</div>
            <img src={image} alt="" />
            <div style={stylesCard.background}>Rating: {rating}</div>
            < FavoriteButton />
        </div>
    );
}

export default Card;