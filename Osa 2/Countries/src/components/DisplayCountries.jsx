import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_SOME_KEY;

const DisplayCountries = ({ countries, showCountry }) => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        if(countries.length === 1) {
            const country = countries[0]
            const [lat, long] = country.latlng
            axios
            .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&units=metric&appid=${api_key}`)
            .then(response => {
                setWeather(response.data.current)
            })
            .catch(error => {
                console.error('Error fetching weather data', error)
            })
        }
    }, [countries])

    if(countries.length === 1 && weather){
        const country = countries[0]
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Area:</strong> {country.area}</p>
                <h3>Languages: </h3>
                <ul>
                    {Object.keys(country.languages).map((short, index) => (
                        <li key={index}>
                            {country.languages[short]}
                        </li>
                    ))}
                </ul>
                <img src={country.flags.png} alt={country.name.common} width="200px" />
                <h2>Weather in {country.capital}</h2>
                <p>Temperature: {weather.temp}° Celcius</p>
                
                {<img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={country.capital.common} width="150px" />}
                <p>Wind: {weather.wind_speed} m/s</p>
            </div>
        )
    } else {
        return (
        <div>
            {countries.map((country, index) => 
                <p key={index}>
                    {country.name.common}
                    <button onClick={() => showCountry(country)}>Show</button>
                </p>
            )} 
        </div>
        );
    }
};

export default DisplayCountries;