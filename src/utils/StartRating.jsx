import React from 'react'
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons';
const StartRating = (point) => {
    const resultPoint = [];
    
    for (let i = 1 ; i <= 5 ; i++){
        if (i <= point){
            resultPoint.push(<StarFill className="text-warning"/>)
        }else if (i <= Math.ceil(point)){
            resultPoint.push(<StarHalf className="text-warning"/>)
        }else{
            resultPoint.push(<Star className="text-secondary"/>)
        }
    }

    return resultPoint;
}

export default StartRating;
