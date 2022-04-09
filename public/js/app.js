console.log("Hi Dineshkumar");



const wheatherform=document.querySelector('form');
const locinput=document.querySelector('input');
const msg1=document.querySelector('#msg-1');
const msg2=document.querySelector('#msg-2');

wheatherform.addEventListener('submit',(e)=>
{
    msg1.textContent="Loading ......"
    msg2.textContent=""
    e.preventDefault();
    fetch('http://localhost:3000/wheather?search='+locinput.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                msg1.textContent=data.error;
            }
            else{
             msg1.textContent=data.address;
             msg2.textContent=data.result;
            //  console.log(data['address'])    
        }
        })
    })
})