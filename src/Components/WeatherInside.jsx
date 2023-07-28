import React from "react";
import './Weather.css'
export default function WeatherInside(props){
return(
        <>
        <div className="secondContainer">
            <div className="cloudImageBox"></div>
            <h1 className="tempText">{props.temp}&deg; C</h1>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <h4 className="cityName">{props.city}</h4>
            <h2 className="weatherStatus">{props.weather}</h2>
        </div>
        <div className="thirdContainer">
            <div className="feelLike">{props.feelLike}&deg;C
            <div>Feel Like
            <div className="iconFeelLike"></div>
            </div>
            </div>

            <div className="humidity">{props.humidity}% 
            <div>Humidity
            <div className="iconHumidity"></div>
            </div>
            </div>
          </div>
        </>
    )
} 