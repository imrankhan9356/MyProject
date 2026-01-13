
let hours=document.querySelector(".hours");
let minutes=document.querySelector(".minutes");
let seconds=document.querySelector(".seconds");
setInterval(()=>{
  let myTime= new Date();
  hours.innerHTML=myTime.getHours();
  minutes.innerHTML=myTime.getMinutes();
  seconds.innerHTML=myTime.getSeconds();
},1000)

setInterval(()=>{
  console.log("hello");
  
},2000)