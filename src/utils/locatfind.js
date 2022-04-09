const request=require('request');



const locatfind=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGluZXNoa3VtYXI1MTEiLCJhIjoiY2wxbnRtam92MHhvNjNwa3EzZ2tsZ2R1NyJ9.4k1iUCgZOa5U1UY7_6QSeA&limit=1'
    request({url: url,json:true},(err,response)=>{
        //console.log(response)
        if(err){
            callback("Location not found",undefined)
        }else if(response.body.features.length===0){
            callback("Please try with another location",undefined);
        }else{
            callback(undefined,{
                latitude: response.body.features[0].center[0],
                longitude:response.body.features[0].center[0],
                address: address
            })
        }
    })
}


module.exports.locatfind=locatfind;