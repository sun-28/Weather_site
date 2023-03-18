const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8bd8f4accmshd7f7e2e5979aab3p1f148ajsn4914764d3488',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getweather =(q)=>{
    cityname.innerHTML=q.toUpperCase();
fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=%3C${q}%3E`, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        temp.innerHTML=response.current.temp_c;
        humidity.innerHTML=response.current.humidity;
        wind.innerHTML=response.current.wind_kph;
    })
	.catch(err => console.error(err));
    const ai = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-KEY': '218a4d27-5ebe-418d-a8d1-794804ad22e9'
        },
        body: JSON.stringify({
          enable_google_results: 'true',
          enable_memory: false,
          input_text: `slogan for weather in ${city.value} in about 20 words`
        })
      };
      
      fetch('https://api.writesonic.com/v2/business/content/chatsonic?engine=premium', ai)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            text.innerHTML=response.message;
        })
        .catch(err => console.error(err));
}

    let btn=document.getElementById('btn');
    btn.addEventListener("click",(e)=>{
        e.preventDefault()
        getweather(city.value)
    })
