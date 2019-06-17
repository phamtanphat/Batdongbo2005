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
async function tinhtoan(a , b){
    const tong = await cong(a ,b)
    const thuong = await nhan(tong , 2)
    return thuong
}

tinhtoan('a' ,1 )
.then(ketqua => console.log(ketqua))
.catch(error => console.log(error))

