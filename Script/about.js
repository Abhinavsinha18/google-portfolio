import navbar from "../component/nav.js";

document.getElementById("nav").innerHTML = navbar();



let second1 = document.getElementById("second1");
// let icon1 = document.getElementById("icon1");
second1.style.borderBottom = "4px solid #1a0dab";
// icon1.style.color = "blue";
second1.style.color = "blue";


let lag = true;
let image_pro = document.getElementById("image_pro");
let flag = true;
image_pro.addEventListener("click",function(){

    let map = document.querySelector(".map-main-box");
 let profile = document.querySelector(".pro-main-box");

 if(flag == true ){
     profile.style.visibility = "visible";
     profile.style.position  = "absolute";
     profile.style.transition= "width 1s ease-in-out";
     profile.style.top = "10%";
     profile.style.left = "73%";
     flag =false;
  

  
     map.style.visibility = "hidden";
     map.style.position  = "absolute";
     map.style.transition= "width 1s ease-in-out";
     map.style.top = "-60%";
    
     lag = true;

    }
    else{
       
        //  image_pro.setAttribute("id","done");
        profile.style.visibility = "hidden";
        profile.style.position  = "absolute";
        profile.style.transition= "width 1s ease-in-out";
        profile.style.top = "-1000%";
        profile.style.left = "-1000%";
       
        flag = true;

    }
        
})

let boxRemove = document.getElementById("fixed");
boxRemove.addEventListener("click",function (){
    let map = document.querySelector(".map-main-box");
 let profile = document.querySelector(".pro-main-box");
 if(flag==false){
    
    profile.style.visibility = "hidden";
    profile.style.position  = "absolute";
    profile.style.transition= "width 1s ease-in-out";
    profile.style.top = "-200%";
    flag = true;
 }
 if(lag==false ){
  
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
        profile.style.top = "10%";
       
        flag = true;

        map.style.visibility = "visible";
        map.style.transition= "width 1s ease-in-out";
        map.style.position  = "absolute";
        map.style.top = "10%";
        map.style.left = "73%";
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

   
   document.getElementById("inp").addEventListener("click",openBox);
   document.getElementById("inp").value= "about";
   
   function openBox(){

    let drop = document.getElementById("drop-search-display");
    let inp = document.getElementById("searchBox");
    let fix = document.getElementById("fixed");
    drop.style.visibility = "visible";
    drop.style.position = "relative";
    drop.style.top = "0%";
    inp.style.borderBottomLeftRadius = "0px";
    inp.style.boxShadow = "none";
    inp.style.borderBottomRightRadius = "0px";
    inp.style.borderBottom = "none";
    inp.style.borderTop= "1px solid #c7c7c7";
    inp.style.borderLeft = "1px solid #c7c7c7";
    inp.style.borderRight = "1px solid #c7c7c7";
    
    fix.style.width = "100%";
    fix.style.height = "80vh";
    fix.style.zIndex = "10";
    
    // document.querySelectorAll("#z-div").style.zIndex = "-10";
}


document.getElementById("top-right").addEventListener("click",Remove);
document.getElementById("fixed").addEventListener("click",Remove);


function Remove(){
    
   
    let fix = document.getElementById("fixed");
    let inp = document.getElementById("searchBox");
    let drop = document.getElementById("drop-search-display");
     drop.style.visibility = "hidden";
     drop.style.position = "absolute";
     inp.style.borderBottomLeftRadius = "24px";
     inp.style.borderBottomRightRadius = "24px";
     inp.style.borderBottom = "1px solid #dfe1e5";
     inp.style.boxShadow  = "0 1px 6px rgb(32 33 36 / 28%)";
     
     drop.style.top = "-200%";
     
     fix.style.zIndex = "0";
     
    //  document.querySelectorAll("#z-div").style.zIndex = "10";
     
    }




    
    const items = document.querySelectorAll(".accordion button");
    
    function toggleAccordion() {
    // let icon = document.getElementById("icon");
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
    // icon.style.transform = "rotate(360deg)";
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
    // icon.style.transform = "rotate(180deg)";
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

let trig =false;
   
let down = document.getElementById("downbox");
down.addEventListener("click", moveDown)


   
let downtwo = document.getElementById("downboxtwo");
downtwo.addEventListener("click", moveDown);
   
let downthree = document.getElementById("downbox3");
downthree.addEventListener("click", moveDown);
let downfour = document.getElementById("downbox4");
downfour.addEventListener("click", moveDown);
   


function moveDown(){
    if(trig==false){

        let mid = document.getElementById("mid");
        mid.style.position= "absolute";
        mid.style.top= "100%";
        trig=true;
    }
    else{
        let mid = document.getElementById("mid");
        mid.style.position= "absolute";
        mid.style.top= "85%";
        trig=false;
    }

}
