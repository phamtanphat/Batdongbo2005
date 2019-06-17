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
function dientichhinhthang(a, b, h, cb) {
    cong(a , b)
    .then(tong => chia(tong , 2))
    .then(trungbinh2so => nhan(trungbinh2so , h))
    .then(ketqua => cb(null , ketqua))
    .catch(error => cb(error))
}

dientichhinhthang(1 , 10 , 'x' , (error , ketqua) => {
    console.log(error|| ketqua)
})


