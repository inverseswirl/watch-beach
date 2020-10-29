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
 anotherElement=  document.getElementById('box1');
 secondElement=  document.getElementById('box3');
 thirdElement=  document.getElementById('box5');
 fourthElement=  document.getElementById('box7');
 fifthElement=document.getElementById('box9');
 sixthElement=document.getElementById('box11')

if( seconds%2==0){
  anotherElement.style.opacity= 0.2;
  secondElement.style.opacity= 0.2;
  thirdElement.style.opacity= 0.2;
  fourthElement.style.opacity= 0.2;
  fifthElement.style.opacity=0.2;
  sixthElement.style.opacity=0.2;
 } else{
  anotherElement.style.opacity=0.6;
  secondElement.style.opacity= 0.6;
  thirdElement.style.opacity= 0.6;
  fourthElement.style.opacity= 0.6;
  fifthElement.style.opacity=0.6;
  sixthElement.style.opacity=0.6;
 }

  

 
}


setInterval(timer,1000)
