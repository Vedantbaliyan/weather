const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="efaf2ae6080ec76217988e381dc63a6f";

const searchbox=document.querySelector(".name input");
const searchbtn=document.querySelector(".icon button");
const weathericon=document.querySelector("#img22")

async function checkweather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);

     if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
     }
     else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".tempp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%"+" humidity";
        document.querySelector(".speed").innerHTML=data.wind.speed+" km/h windspeed";

        if(data.weather[0].main=="Clouds"){
        weathericon.src="clouds.png"
     }
        else if(data.weather[0].main=="Clear"){
        weathericon.src="clear.png"
        }
        else if(data.weather[0].main=="Rain"){
        weathericon.src="rain.png"
        }
        else if(data.weather[0].main=="Drizzle"){
        weathericon.src="drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
        weathericon.src="mist.png"
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
     }

    
}


searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})