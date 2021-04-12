var akannamefemale ={
        
    sunday:"akosua",


    monday:"adwoa",


    tuesday:"abenna",
 
 
    wenesday:"akua",
 
 
    thursday:"yaa",
 

    friday:"afua",
 
 
    saturday:"ama",
   

};
var akannamemale ={
    
    sunday:"kwasi",


    monday:"kwando",


    tuesday:"kwabena",


    wenesday:"kwaku",
 
 
    thursday:"yaw",
 
 
    friday:"kofi",

 
    saturday:"kwame",

};
function calculate(){
    var centuary= document.getElementById("cc").Value;
    var year= document.getElementById("yy").Value;
    var month= document.getElementById("mm").Value;
    var day= document.getElementById("dd").Value;
    var gender= document.getElementById("gender").Value;

    var dayoftheweek =( ( (centuary/4) -2*centuary-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;

   
    

    if(day<=0||day>31){
        alert("please enter valid day!");
         
         
    }
    else if (m<= 0)||(m > 12){
        alert("please enter valid day!");
    }
    else if (dayoftheweek=0&&gender=male){
        console.log(("akan name is"+akannamemale.sunday)
    }
    else if (dayoftheweek=1 && gender=male){
        console.log("akan name is"+akannamemale.sunday)
    }
    else if(dayoftheweek)
   
}




