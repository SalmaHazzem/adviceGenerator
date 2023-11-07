let adviceNum=document.querySelector(".adviceNum");
let advice =document.querySelector(".advice");
let clickableDiv=document.querySelector(".another");

clickableDiv.addEventListener("click",function(){
let mypromise =new Promise((res,rej)=>{
    let myreq=new XMLHttpRequest();
    myreq.open("GET",`https://api.adviceslip.com/advice`);
    myreq.send();
   myreq.onload =function(){
    if(this.readyState==4&&this.status==200){
        res(JSON.parse(this.responseText));
    }else {
        rej("reqest rejected");
    }
   }
});

mypromise.then((resolve)=>{
 adviceNum.innerHTML=resolve["slip"].id;
 advice.innerHTML=resolve["slip"].advice;
}).catch((rejected)=>{
    console.log(rejected);
})
})