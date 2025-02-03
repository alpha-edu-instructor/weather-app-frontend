import { useState } from "react";
import Search from "./components/Search";
import WeatherPanel from "./components/WeatherPanel";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("");

  async function fetchData(cityName) {
    try {
      setWeatherData(null);
      setIsLoading(true);
      const { data } = await axios.get(
        "http://localhost:8080/weather/" + cityName
      );
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <button onClick={() => fetchData(city)}>Start</button>
      <Search city={city} setCity={setCity} />
      {isLoading && <p>Loading...</p>}
      {weatherData && (
        <WeatherPanel
          city={weatherData.city}
          description={weatherData.description}
          temp={weatherData.temp}
          feelsLike={weatherData.feelsLike}
          forecast={weatherData.forecast}
        />
      )}
    </div>
  );
}
