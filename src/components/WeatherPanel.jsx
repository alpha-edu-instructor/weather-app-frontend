export default function WeatherPanel() {
  return (
    <div className="panel">
      <div className="current">
        <h4 className="current-city">Tokyo</h4>
        <h2 className="current-temp">22°</h2>
        <p className="current-condition">Broken Clouds</p>
        <p className="current-feels">Feels like: 20°</p>
      </div>
      <div className="forecast">
        <div className="forecast-wrapper">
          {Array(12)
            .fill(null)
            .map((item) => (
              <div className="forecast-item">
                <p className="forecast-item__time">01.02 12:00</p>
                <img
                  src="http://openweathermap.org/img/w/04d.png"
                  alt="Broken Clouds"
                  width={40}
                />
                <p className="forecast-item__temp">18°</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
