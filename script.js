function calculate(){
    var centuary= document.getElementById("cc").Value;
    var year= document.getElementById("yy").Value;
    var month= document.getElementById("mm").Value;
    var day= document.getElementById("dd").Value;
    var gender= document.getElementById("gender").Value;

    var dayoftheweek =( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;

    var akannamemale ={
    
        sunday:"kwasi",
    
    
        monday:"kwando",
    

        tuesday:"kwabena",
    
    
        wenesday:"kwaku",
     
     
        thursday:"yaw",
     
     
        friday:"kofi",
    
     
        saturday:"kwame",
    
    };
    var akannamefemale ={
        
            sunday:"akosua",
       
        
            monday:"adwoa",
        
        
            tuesday:"abenna",
         
         
            wenesday:"akua",
         
         
            thursday:"yaa",
         
        
            friday:"afua",
         
         
            saturday:"ama",
           
    
       };

    if(day<=0||day>31){
        alert("please enter valid day!");
         
         
    }
    else if (m<= 0)||(m > 12){
        alert("please enter valid day!");
    }
    else if (dayoftheweek=0&&gender=male){
        return("akan name is"+.akannamemale[o])
    }
   
}




