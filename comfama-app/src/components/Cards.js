import React from 'react'
import Card from './Card'
import "./cards.css";

function Cards({anime}) {
    function getScore(anime) {
        let totalScore = 0;
        let count = 0;
        for (let item of anime){
          totalScore += item.score
          count += 1;
        }
        return totalScore / count
    }

    return (
        <div className="carousel">
            <dt className="card-title text-center">The average score of your search is: {getScore(anime) ? getScore(anime).toFixed(2) : 0}</dt>
            <div className="carousel__container">
                {
                    anime.map(card =>(
                        <div className="carousel__item" key={card.mal_id}>
                            <Card 
                                title={card.title}
                                image={card.image_url}
                                score={card.score}
                                url={card.url}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
