import { useEffect,useState } from "react";
import Prayer from "./component/prayer";

function App() {

  const[prayertimes,setprayertimes]=useState({})



  
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    
  ];

  useEffect(() => {
    const fetchprayertimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/07-03-2025?city=cairo&country=egypt&method=8`);
        const data_prayer = await response.json(); 


        setprayertimes(data_prayer.data.timings)
        console.log(data_prayer.data.timings);

        
      } catch (error) {
        console.error(error);
      }
    };

    fetchprayertimes(); 
  }, []); 

  return (
    <section>
      <div className="container"> 
        <div className="top-section">
          <div className="city">
            <h3>City</h3>
            <select>
              {cities.map((city_obj) => (
                <option key={city_obj.value} value={city_obj.value}>
                  {city_obj.name}
                </option>
              ))}
            </select>
          </div>
          <div className="date">
            <h3>DATE</h3>
            <h4>04-03-2025</h4>
          </div>
        </div>
        <Prayer name="الفجر" time={prayertimes.Fajr}/>
        <Prayer name="الظهر" time={prayertimes.Dhuhr}/>
        <Prayer name="العصر" time={prayertimes.Asr} />
        <Prayer name="المغرب" time="6:00" />
        <Prayer name="العشاء" time="7:45" />
      </div> 
    </section>
  );
}

export default App;
