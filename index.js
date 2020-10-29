function timer(){
  var hours= new Date().getHours();
  var minutes= new Date().getMinutes();
  var seconds= new Date().getSeconds()
  var am_Pm="";

  hours=hours<10? "0"+hours:hours;
  minutes=minutes<10? "0"+minutes:minutes;
  seconds= seconds<10? "0"+seconds:seconds;
  var time= 00+":"+ 00+":"+ 00 +" " +am_Pm;
  
  hours<12? am_Pm="a.m": am_Pm="p.m"
  var time= hours+":"+ minutes +" "+ am_Pm;

 var element= document.getElementById('timer');
 element.innerHTML= time;


  var date= new Date().toDateString();
  var dateElement= document.getElementById('date');

  dateElement.innerHTML= date;
 
  

 
}


setInterval(timer,1000)
