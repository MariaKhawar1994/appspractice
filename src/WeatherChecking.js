import React,{useState} from 'react'
import './WeatherChecking.css';


const api={
    // using key which identify the items
    key:"f5b7607fccce9e6ad6d96c7a55d4ea41",
    // base of the key
    base:"https://api.openweathermap.org/data/2.5/",
};
function WeatherChecking () {
    // using useState
    const [search, setSearch] = useState('');
    const [weather, setWeather] = useState({});

// search pressed

    const searchPressed=()=>{
        // fetch provide javascript interface for processing and manipulationg the parts of protocol

        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res)=>res.json())
        .then((result)=>{
            setWeather(result);
        });
    };
  return (
    <div>
        <header className='App-header'>
            {/* Header */}
<h1>Weather App</h1>
{/* search box */}
<div>

<input style={{padding:'8px', outline:'none'}} type='text' placeholder='Enter city/town...' onChange={(e) =>setSearch(e.target.value)}/>
<button style={{padding:'8px'}} onClick={searchPressed}>Search</button>
</div>

{/* checking */}
{typeof weather.main !=="undefined"?(
    <div>
{/* location */}
<p>{weather.name}</p>
{/* temperature */}

{/* using degree symbol press alt+0176 */}
<p>{weather.main.temp}°F</p>
{/* condition(sunny) */}
<p>{weather.weather[0].main}</p>
<p>{weather.weather[0].description}</p>
</div>
):(
    ""
)}
        </header>
        
    </div>
  )
}
export default WeatherChecking