const request = require('request')

// const URL = "https://api.openweathermap.org/data/2.5/find?q=Saigon&units=metric&appid=86183a23377ed034aef7aad102f43d64"

// request(URL ,{json : true} ,(error , response , body)=> {
//     // console.log(body)
//         // console.log( body.list[0].main.temp);
//         // if(error){
//         //     console.log(error.message)
//         // }else{
//         //     if(body.cod == "200"){
//         //         console.log(body.list[0].main.temp)
//         //     }else{
//         //         console.log("khong co thanh pho")
//         //     }
//     // }
//     if(error) return console.log(error.message)
//     if(body.cod == "200") return console.log(body.list[0].main.temp)
//     console.log("khong co thanh pho hien tai")
// })

// function getTemp(city , cb){
//     const URL = `https://api.openweathermap.org/data/2.5/find?q=${city}&units=metric&appid=86183a23377ed034aef7aad102f43d64`
//     request(URL ,{json : true} ,(error , response , body)=> {
//         if(error) return cb(new Error("loi url"))
//         if(body.cod == "200") return cb(null , body.list[0].main.temp)
//         cb(new Error("Khong co thanh pho") )
//     })
// }

// getTemp("a" , (error , temp) => {
//     console.log(error.message || temp)
// })