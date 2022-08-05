import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = (props) => {
    const [cardName, setCardName] = useState(props.cardName);
    const [cardDesc, setCardDesc] = useState(props.cardDesc);

    useEffect (() => {
        setCardName(props.cardName);
        setCardDesc(props.cardDesc);
    }, [props])

    return (
        <div>
            <p>{cardDesc}</p>
            <h2>{cardName}</h2>
        </div>
    )
}

export default Card;