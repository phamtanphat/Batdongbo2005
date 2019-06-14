const request = require('request')

const URL = "https://api.openweathermap.org/data/2.5/find?q=hanoi&units=metric&appid=86183a23377ed034aef7aad102f43d64"
request(URL ,{json : true} ,(error , response , body)=> {
    console.log( body.list[0].main.temp);
})