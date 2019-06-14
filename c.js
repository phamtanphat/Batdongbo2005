const request = require('request')

function cong(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/cong/${a}/${b}`
    request(URL ,{json : true} ,(error , response , body)=> {
        if(error) return cb(error)
        cb(null ,body.message)
    })
}
function tru(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/tru/${a}/${b}`
    request(URL ,{json : true} ,(error , response , body)=> {
        if(error) return cb(error)
        cb(null ,body.message)
    })
}
function nhan(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/nhan/${a}/${b}`
    request(URL ,{json : true} ,(error , response , body)=> {
        if(error) return cb(error)
        cb(null ,body.message)
    })
}
function chia(a , b , cb){
    const URL = `https://pheptinhonline.herokuapp.com/chia/${a}/${b}`
    request(URL ,{json : true} ,(error , response , body)=> {
        if(error) return cb(error)
        cb(null ,body.message)
    })
}
cong(10 , 10 , (error , tong) => {
    console.log(error || tong)
})

