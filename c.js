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
// cong(10 , 'x' , (error , tong) => {
//     if(error) return console.log(error)
//     nhan(tong , 2 , (error , tich) => {
//         if(error) return console.log(error)
//         console.log(tich)
//     })
// })
//1/2 (a+b) x h
function dientichhinhthang(a , b , h , cb){

}
dientichhinhthang(10 , 5 , 8 , (error , ketqua)=>{
    console.log(error ||ketqua)
})

