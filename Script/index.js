let lag = true;
let image_pro = document.getElementById("image_pro");
let flag = true;
image_pro.addEventListener("click",function(){

    let map = document.querySelector(".map-main-box");
 let profile = document.querySelector(".pro-main-box");
 if(flag == true ){
     profile.style.visibility = "visible";
     profile.style.position  = "relative";
     profile.style.top = "0%";
     flag =false;

     map.style.visibility = "hidden";
     map.style.position  = "absolute";
     map.style.top = "-60%";
    
     lag = true;

    }else{
        //  image_pro.setAttribute("id","done");
        profile.style.visibility = "hidden";
        profile.style.position  = "absolute";
        profile.style.top = "-60%";
       
        flag = true;
    }
        
})


let dotBox =  document.querySelector(".gb_Ue");

dotBox.addEventListener("click",function(){

    let map = document.querySelector(".map-main-box");
    if(lag == true){
        let profile = document.querySelector(".pro-main-box");
        profile.style.visibility = "hidden";
        profile.style.position  = "absolute";
        profile.style.top = "-60%";

        flag = true;

        map.style.visibility = "visible";
        map.style.position  = "relative";
        map.style.top = "0%";
        lag =false;

       
       }else{
           //  image_pro.setAttribute("id","done");
           map.style.visibility = "hidden";
           map.style.position  = "absolute";
           map.style.top = "-60%";
          
           lag = true;
       }
           
   })