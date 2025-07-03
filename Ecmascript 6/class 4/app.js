let getBox = document.querySelector('#box')

let checkWeather = () => {
    let getSearchId = document.getElementById('search')

    fetch(`https://api.openweathermap.org/data/2.5/weather?&q=${getSearchId.value}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`)
        .then(data => data.json())
        .then(data => {

            console.log(data)

            getBox.innerHTML = `<div class="card" style="width: 18rem;">
  <img src="https://i.pinimg.com/originals/e7/be/ff/e7befff154e80ea8de54b116b750af98.gif" class="card-img-top" alt="...">
  <div class="card-body">
  <hr>  
  <h5 class="card-title"><b> ${data.name} </b></h5>
    <hr>
    <p class="card-text"><strong>Temperature: </strong>  ${data.main.temp}</p>
    <p class="card-text"><strong>Feels Like: </strong> ${data.main.feels_like}</p>
    <p class="card-text"><strong>Humidity: </strong> ${data.main.humidity}</p>
      </div>
</div>`
        })
        .catch(err => console.log(err))
        getSearchId.value = ''
}

