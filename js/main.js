console.log("Hello");
document.querySelector('.img-footloose').addEventListener("click",function () { 
    console.log("Hello");
    window.location.href = "events.html";
    window.onload = function(){
        document.querySelectorAll('.filter')[1].click();
       };
 });