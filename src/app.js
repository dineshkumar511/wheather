const express=require('express');
const path=require('path'); 
const hbs=require('hbs');
const forcast=require('./utils/forcast');
const loc=require('./utils/locatfind');
const app=express();


console.log(__dirname);
const staticpath=(path.join(__dirname,'../public'))
const viewspath=path.join(__dirname,'../template/views')
const partials=path.join(__dirname,'../template/partials')

//Setting up for static content
app.use(express.static(staticpath))

//Setting up for handlebars
app.set("view engine","hbs");
app.set("views" , viewspath)
hbs.registerPartials(partials)
app.get('',(req,res)=>{
    res.send('<h1>Express</h1>');
})

app.get('/index',(req,res)=>{
    res.render('index',{
        name:"dinesh"
    });
})


app.get('/help',(req,res)=>{
    res.render('help',{
        name:"dinesh"
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:"dinesh"
    });
})
 

app.get('/wheather',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error: 'result not found'
        })
    }
    loc.locatfind(req.query.search,(error,{latitude,longitude,address}={})=>
    {
        forcast.forcastwhether(latitude,longitude,(error,result)=>{
            if(error)
            {
                return res.send({
                    error:"Could not find the forcast detail"
                })
            }
            res.send({
                latitude,
                longitude,
                address,
                result                
            })
        })
    })

   
})

app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send('Please add the search term');
    }
    res.send({
        searchProduct: req.query.search
    })
})

app.get('*',(req,res)=>{
   res.render('404',{
       name:'dk'
   })
})

app.listen(3000,'localhost',()=>{
    console.log("Server started in 3000");
})