import { memo, useState } from "react";
import { stylesCard } from "../styles/style";
import { useEffect } from "react";

function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        console.log('вы нажали на кнопку like/dislike'); // проверка монтирования
    }, [isFavorite])

    return (
        <>
            <button style={stylesCard.buttonWith} onClick={() => setIsFavorite(!isFavorite)}>{isFavorite ? 'like' : 'dislike'}</button>
        </>
    );
}

export default memo(FavoriteButton);