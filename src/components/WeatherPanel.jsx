import { formatDate } from "../utils/utils";

export default function WeatherPanel({
  city,
  temp,
  feelsLike,
  description,
  forecast
}) {
  return (
    <div className="panel">
      <div className="current">
        <h4 className="current-city">{city}</h4>
        <h2 className="current-temp">{temp}°</h2>
        <p className="current-condition">{description}</p>
        <p className="current-feels">Feels like: {feelsLike}°</p>
      </div>
      <div className="forecast">
        <div className="forecast-wrapper">
          {forecast.map((item, i) => (
            <div className="forecast-item" key={i}>
              <p className="forecast-item__time">{formatDate(item.time)}</p>
              <img
                src={`http://openweathermap.org/img/w/${item.icon}.png`}
                alt="Broken Clouds"
                width={40}
              />
              <p className="forecast-item__temp">{item.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
