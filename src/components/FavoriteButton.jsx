import { useState } from "react";
import { stylesCard } from "../styles/style";

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
            <button style={stylesCard.buttonWith} onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? 'like' : 'dislike'}</button>
        </>
    );
}

export default FavoriteButton;