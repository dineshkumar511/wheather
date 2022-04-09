const request=require('request');

const forcastwhether=(lati,longi,callback)=>{
    url='http://something/';
    request({url:url,json:true},(err,response)=>{
        
            callback(undefined,"clear throughout the day , it is currently 30 degree out, there is 0% chance for rain");
        
    })
}

module.exports.forcastwhether=forcastwhether;