
$(document).ready(function () {
    var url = "https://data.covid19india.org/data.json"

    $.getJSON(url, function (data) {
        console.log(data)

        var states = []
        var confirmed = []
        var recovered = []
        var deaths = []
        var active=[]

        $.each(data.statewise, function (id, obj) {
            states.push(obj.state)
            confirmed.push(obj.confirmed)
            recovered.push(obj.recovered)
            deaths.push(obj.deaths)
            active.push(obj.active)

        })
        states.shift()
        confirmed.shift()
        recovered.shift()
        deaths.shift()
        active.shift()

        var totalActive = data.statewise[0].active
        var totalConfirmed = data.statewise[0].confirmed
        var totalRecovered = data.statewise[0].recovered
        var totalDeaths = data.statewise[0].deaths
        var lastUpdateTime=data.statewise[0].lastupdatedtime

        $("#active").append(totalActive)
        $("#confirmed").append(totalConfirmed)
        $("#recovered").append(totalRecovered)
        $("#deceased").append(totalDeaths)
        $("#update").append(lastUpdateTime)
       
        var caseHtml = document.getElementById('confirmedChart').getContext('2d');
        var caseChart = new Chart(caseHtml, {
            type: 'line',
            data: {
                labels: states,
                datasets: [{
                    label: "Confirmed Cases",
                    borderColor: 'rgb(9 242 255)',
                    backgroundColor: 'rgb(213 254 255)',
                    data: confirmed,
                    fill: true

                }]


            },

        });
        var dHtml = document.getElementById('deathChart').getContext('2d');
        var deathChart = new Chart(dHtml, {
          type: 'line',
          data: {
            labels: states,
            datasets: [{
              label: "Deceased Cases ",
              borderColor: '#FF3838',
              backgroundColor: '#FF9B9B',
              data: deaths,
             fill: true
            }]
          },

        });
        var rHtml = document.getElementById('recoveredChart').getContext('2d');
        var recoveredChart = new Chart(rHtml, {
          type: 'line',
          data: {
            labels: states,
            datasets: [{
              label: "Recovered Cases",
              borderColor: '#42FA30',
              backgroundColor: '#C1FFA2',
              data: recovered,
             fill: true
            }]
          },

        });
        var aHtml = document.getElementById('activeChart').getContext('2d');
        var activeChart = new Chart(aHtml, {
          type: 'line',
          data: {
            labels: states,
            datasets: [{
              label: "Active cases",
              borderColor: '#FCE900',
              backgroundColor: '#FCFFBE',
              data: active,
              
             fill: true
            }]
          },

        });


    })
})