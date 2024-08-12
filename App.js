import React from "react"
import Nav from "./components/Nav"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {
    const destinations = data.map((destination) => {
        return (
            <Card 
                key={destination.id}
                {...destination}
            />
        )
        }
    )
    
    return (
        <div>
            <Nav />
            <div className="card-container">
                {destinations}
            </div>
        </div>
    )
}