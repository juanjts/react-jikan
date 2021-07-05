import React from 'react'
import "./card.css";


function Card({title, score, image, url}) {
    function scoreController(score){
        if (score >= 0 && score <= 4){
            return "I do not recommend it."
        }else if (score > 4 && score < 8){
            return "You may have fun."
        }else{
            return "Great, this is one of the best anime."
        }
    }
    return (
        <div className="card text-center bg-dark">
            <div className="overflow">
                <img src={image} alt="img of card" className="card-img-top img-size"/>
            </div>
            <div className="card-body text-light">
                <h6 className="card-title">{title}</h6>
                <p className="card-text text-secondary">{scoreController(score)}</p>
                <p className="card-text text-secondary">{score}</p>
                <a href={url} className="btn btn-outline-secondary" target="_blank">Go to website</a>
            </div>
        </div>
    )
}

export default Card
