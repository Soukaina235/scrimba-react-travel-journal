import React from "react"


export default function Card(props) {
    // id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl:
    return (
        <div className="card">
            <div className="card--image-container">
                <img src={props.imageUrl} alt={props.location} />
            </div>
            <div className="card--body">
                <div className="card--location">
                    <img  src="../images/location-icon.png" alt="location-icon" />
                    <span>{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <span className="card--dates">{props.startDate} - {props.endDate}</span>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}