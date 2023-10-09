let istatus=document.querySelector("h5");
let btn = document.querySelector("#add");
var check = 0;

btn.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    btn.style.backgroundColor = "#B4B4B3";
    check = 1;
    }else{
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    btn.innerHTML = "Add Friend"
    btn.style.backgroundColor = "cadetblue" ;
    check = 0;

    }
})
