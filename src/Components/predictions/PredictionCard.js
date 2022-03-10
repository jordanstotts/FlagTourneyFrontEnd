import React from "react";
import { Link } from 'react-router-dom';


const PredictionCard = (props) => {
    const  prediction  = props.prediction;

    return (
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-prediction/${prediction._id}`}>
                        { prediction.boot }
                    </Link>
                </h2>
                <p>{prediction.second}</p>
                <p>{prediction.third}</p>
                <p>{prediction.fourth}</p>
                <p>{prediction.fifth}</p>
                <h2>{prediction.flag}</h2>
            </div>
        </div>
    )
}

export default PredictionCard