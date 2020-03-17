// ASYNCHRONOUS JS AND XML
// HTTP REQUEST (GET, POST, etc)
// RESPONSE
// JS running on the client (browser) <==> remote server API
// const getWeather = (id) => {
//   fetch(
//     `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
//   )
//     .then(data => data.json())
    // .then(data => {
    //   const today = data.consolidated_weather[0];
    //   console.log(
    //     `Temperaturs in ${data.title} today stay between ${today.min_temp} and ${today.max_temp}`
    //   );
//     })
//     .catch(err => console.log(err + ""));
// };



getWeatherAW(44418);
 async function getWeatherAW(woeid) {
   try {
     const result = await fetch(
       `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
     );
     const data = await result.json();
     const tomorrow = data.consolidated_weather[1];
     console.log(
       `Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`
     );
     return data;
   } catch (error) {
     alert(error);
   }
 }
 getWeatherAW(2487956);

 let dataLondon;
 getWeatherAW(44418).then(data => {
   dataLondon = data;
   console.log(dataLondon);
 });
