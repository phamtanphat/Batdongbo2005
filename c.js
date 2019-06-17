const request = require('request')

function cong(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) return reject(error)
            resolve(body.message)
        })
    })
}
// cong(10 , 'x')
// .then(response => console.log(response))
// .catch(error => console.log(error.message))

function tru(a, b) {
   return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            resolve(body.message)
        })
   })
}

function nhan(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            resolve(body.message)
        })
   })
}

function chia(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            resolve(body.message)
        })
   })
}

// cong(10 , 'x' , (error , tong) => {
//     if(error) return console.log(error)
//     nhan(tong , 2 , (error , tich) => {
//         if(error) return console.log(error)
//         console.log(tich)
//     })
// })
//1/2 (a+b) x h
// function dientichhinhthang(a, b, h, cb) {
//     cong(a,b , (error, tong) => {
//         if (error) return cb(error)
//         chia(tong, 2, (error, thuong) => {
//             if (error) return cb(error)
//             nhan(thuong , h , (error,tich) => {
//                 if(error) return cb(error)
//                 cb(null , tich)
//             })
//         })
//     })
   
// }



