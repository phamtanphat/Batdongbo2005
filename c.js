const request = require('request')

function cong(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) return reject(error)
            if(body.success == false) return reject(body.message + "cong")
            resolve(body.message)
        })
    })
}

function tru(a, b) {
   return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            if(body.success == false) return reject(body.message )
            resolve(body.message)
        })
   })
}

function nhan(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            if(body.success == false) return reject(body.message + "nhan")
            resolve(body.message)
        })
   })
}

function chia(a, b) {
    return new Promise((resolve , reject) => {
        const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
        request(URL, { json: true }, (error, response, body) => {
            if (error) reject(error)
            if(body.success == false) return reject(body.message + "chia")
            resolve(body.message)
        })
   })
}

//1/2 (a+b) x h
function dientichhinhthang(a, b, h) {
    return new Promise((resolve , reject) =>{
        cong(a , b)
        .then(tong => chia(tong , 2))
        .then(trungbinh2so => nhan(trungbinh2so , h))
        .then(ketqua => resolve(ketqua))
        .catch(error => reject(error))
    })
}

// dientichhinhthang(1 , 10 , 5 )
// .then(ketqua => console.log(ketqua))
// .catch(error => console.log(error))


cong('x' , 5)
.catch(error => console.log(error))
.then(tong => console.log(tong))


