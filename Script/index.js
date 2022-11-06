let lag = true;
let image_pro = document.getElementById("image_pro");
let flag = true;
image_pro.addEventListener("click",function(){

    let map = document.querySelector(".map-main-box");
 let profile = document.querySelector(".pro-main-box");
 let boxRemove = document.getElementById("big-div");
 if(flag == true ){
     profile.style.visibility = "visible";
     profile.style.position  = "relative";
     profile.style.transition= "width 1s ease-in-out";
     profile.style.top = "0%";
     flag =false;
    boxRemove.style.zIndex = 10;
     map.style.visibility = "hidden";
     map.style.position  = "absolute";
     map.style.transition= "width 1s ease-in-out";
     map.style.top = "-60%";
    
     lag = true;

    }
    else{
        boxRemove.style.zIndex = -10;
        //  image_pro.setAttribute("id","done");
        profile.style.visibility = "hidden";
        profile.style.position  = "absolute";
        profile.style.transition= "width 1s ease-in-out";
        profile.style.top = "-60%";
       
        flag = true;
    }
        
})

let boxRemove = document.getElementById("big-div");
boxRemove.addEventListener("click",function (){
    let map = document.querySelector(".map-main-box");
 let profile = document.querySelector(".pro-main-box");
 if(flag==false){
    boxRemove.style.zIndex = -10;
    profile.style.visibility = "hidden";
    profile.style.position  = "absolute";
    profile.style.transition= "width 1s ease-in-out";
    profile.style.top = "-60%";
    flag = true;
 }
 if(lag==false ){
    boxRemove.style.zIndex = -10;
    map.style.visibility = "hidden";
    map.style.position  = "absolute";
    map.style.transition= "width 1s ease-in-out";
    map.style.top = "-60%";
    lag = true;
 }


})


let dotBox =  document.querySelector(".gb_Ue");

dotBox.addEventListener("click",function(){

    let map = document.querySelector(".map-main-box");
    if(lag == true){
        let profile = document.querySelector(".pro-main-box");
        profile.style.visibility = "hidden";
        profile.style.transition= "width 1s ease-in-out";
        profile.style.position  = "absolute";
        profile.style.top = "-60%";

        flag = true;

        map.style.visibility = "visible";
        map.style.transition= "width 1s ease-in-out";
        map.style.position  = "relative";
        map.style.top = "0%";
        lag =false;

       
       }else{
           //  image_pro.setAttribute("id","done");
           map.style.visibility = "hidden";
           map.style.position  = "absolute";
           map.style.top = "-60%";
           map.style.transition= "width 1s ease-in-out";
          
           lag = true;
       }
           
   })


  
   function openBox(){
       let drop = document.getElementById("drop-search-display");
       let inp = document.getElementById("searchBox");
       drop.style.visibility = "visible";
       drop.style.position = "relative";
       
       drop.style.top = "0%";
       inp.style.borderBottomLeftRadius = "0px";
       inp.style.borderBottomRightRadius = "0px";
       inp.style.borderBottom = "none";
       
       let happy =  document.getElementById("happy");
       happy.style.visibility = "hidden";
       
    }
    
    
    function remove(){
        
        let inp = document.getElementById("searchBox");
    let drop = document.getElementById("drop-search-display");
    drop.style.visibility = "hidden";
    drop.style.position = "absolute";
    inp.style.borderBottomLeftRadius = "24px";
    inp.style.borderBottomRightRadius = "24px";
    inp.style.borderBottom = "1px solid #dfe1e5";
    drop.style.top = "-200%";


    let happy =  document.getElementById("happy");
    happy.style.visibility = "visible";
}

   