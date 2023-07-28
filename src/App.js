import axios from 'axios';
import './App.css';
import React, { useState } from "react"
function App() {
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ddb8fd7cabb4507af8539ba4c24afe1a`;
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        setHidden(false)
      })
        .catch((error) => {
          setData({});
          setHidden(false)
          alert("May be you spelled wrong or Invalid City Name")
        })
    }
  }
  const kelvinToCelsius = (tempInCelsius) => {
    return (tempInCelsius - 273.15).toFixed(2);
  }
  return (
    <div className='container'>
      <img src="https://cdn.pixabay.com/photo/2012/04/14/16/37/sky-34536_640.png" id="image" alt="" srcset="" />
      <div className="mainContainer">
        <label htmlFor="text">
          <input type="text" id="text" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Search Your City" />
        </label>
        <div className="secondContainer">
          <div id="temperature">
            {!hidden && data.main ? <img src="https://cdn-icons-png.flaticon.com/512/4158/4158502.png" alt="" id="tempImage" /> : null}
            {data.main ? <h1>{kelvinToCelsius(data.main.temp)}&deg;C</h1> : null}
          </div>
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <h4 className="cityName">
            {!hidden && data.main ? <img src="https://www.iconpacks.net/icons/2/free-location-icon-2952-thumb.png" className="allImages" alt="" /> : null}
            {data.name}</h4>
          {data.weather ? <h2 className="weatherStatus">{data.weather[0].main}</h2> : null}
          {/* <h2 className="weatherStatus"></h2> */}
        </div>
        {data.name !== undefined &&
          <div className="thirdContainer">
            <div className="feelLike">{data.main ? <div>{data.main.feels_like}</div> : null}
              <p>Feel Like</p>
            </div>
            <div className="humidity">{data.main ? <div>{data.main.humidity} </div> : null}
              <p>Humidity</p>
            </div>
            <div className="humidity">{data.main ? <div>{data.main.pressure} </div> : null}
              <p>pressure</p>
            </div>
            <div className="humidity">{data.wind ? <div>{data.wind.speed} </div> : null}
              <p>speed</p>
            </div>
          </div>
        }
        <div className="wave"></div>
      </div>
    </div>
  );
}

export default App;
