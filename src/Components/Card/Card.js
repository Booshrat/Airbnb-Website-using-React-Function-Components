import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import './styles.css';

// Create a function component. This component passes props to the App component.
function Card(props) {
  return (
    <div className='card'>
        <img className='card-img' src={props.image} />
        <div className='card-info'>
            <h3 className='card-title'>{props.title}</h3>
            <div className='card-rating'>
                <StarRateRoundedIcon />
                <p>{props.rating}</p>
            </div>
        </div>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{props.description}</p>
        <p style={{ margin: 0, color: "var(--font-grey)" }}>{props.date}</p>
        <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black", textDecoration: "underline" }}>
            <span style={{ fontWeight: "600" }}>£{props.price}</span> total
        </p>
    </div>
  )
}

// Export the Card component.
export default Card;