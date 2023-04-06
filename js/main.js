const select = document.querySelector('select');
document.querySelector('button').addEventListener('click', getNASA)
const list = document.getElementById('facilities')
//what are our facilities?


let facilities = {
arm: [],
ames: [],
glen: [],
god: [], 
god2: [],
jet: [],
john: [],
ken: [],
lang: [],
marsh: [],
mary: [],
mich: [],
nasa: [],
neil: [],
sten: [],
wall: [],
white: []
}


function getNASA(){
    const url = (`https://data.nasa.gov/resource/gvk9-iz74.json`)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        // push to correct center 
        for (const fac of data) {

            if (fac.center === 'Ames Research Center'){
                facilities.ames.push(fac)
                // console.log(facilities.ames)
                // document.querySelector('h3').innerHTML = JSON.stringify(facilities.ames)
                
            }
            if (fac.center === 'Armstrong Flight Research Center'){
                facilities.arm.push(fac)
                
            }
            if (fac.center === 'Glenn Research Center'){
                facilities.glen.push(fac)
            }
            if (fac.center === 'Goddard Space Flight Center'){
                facilities.god.push(fac)
            }
            if (fac.center === 'Jet Propulsion Lab'){
                facilities.jet.push(fac)
            }
            if (fac.center === 'Johnson Space Center'){
                facilities.john.push(fac)
            }
            if (fac.center === 'Kennedy Space Center'){
                facilities.ken.push(fac)
            }
            if (fac.center === 'Langley Research Center'){
                facilities.lang.push(fac)
            }
            if (fac.center === 'Marshall Space Flight Center'){
                facilities.marsh.push(fac)
            }
            if (fac.center === 'Michoud Assembly Facility'){
                facilities.mich.push(fac)
            }
            if (fac.center === 'NASA Aircraft Management Division'){
                facilities.nasa.push(fac)
            }
            if (fac.center === 'Stennis Space Center'){
                facilities.sten.push(fac)
            }
            if (fac.center === 'Wallops Flight Facility/GSFC'){
                facilities.wall.push(fac)
            }
        }
        function showFacilities(){
            let select = document.querySelector('select').value
            let center = facilities[select]
            list.innerHTML = ''
            for (fac of center){
              console.log(fac.facility)
              let li = document.createElement('li')
              li.appendChild(document.createTextNode(`${fac.facility}`))
              list.appendChild(li)
            }
        }          
        console.log(facilities.god2)
        showFacilities()
        function getWeather(){
            let select = document.querySelector('select').value
            let query = facilities[select][0].zipcode
            console.log(query)
            const url = (`http://api.weatherapi.com/v1/forecast.json?key=ccbf52c53f1e40c4b5b144818230404&q=${query}&days=1&aqi=yes&alerts=yes`)
            fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                document.getElementById('temp').innerText = `${data.current.temp_f}	\xB0 F`
                console.log(data.current.temp_f, 'temp farenheit')
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
            
            
        }
        
        getWeather() 
        //make sure we got em all 
        console.log(
            + arm.length
            + ames.length
            + glen.length
            + god .length
            + god2.length
            + jet.length
            + john.length
            + ken.length
            + lang.length
            + marsh.length
            + mary.length
            + mich.length
            + nasa.length
            + neil.length
            + sten.length
            + wall.length
            + white.length, 'total')
            //they're all accounted for!
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
    }