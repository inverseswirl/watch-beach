function timer(){
  var hours= new Date().getHours();
  var minutes= new Date().getMinutes();
  var seconds= new Date().getSeconds()
  am_Pm= "a.m";

  hours=hours<10? "0"+hours:hours;
  minutes=minutes<10? "0"+minutes:minutes;
  seconds= seconds<10? "0"+seconds:seconds;
  var time= 00+":"+ 00+":"+ 00 +" " +am_Pm;

  var time= hours+":"+ minutes +":"+seconds + " " + am_Pm;

 var element= document.getElementById('timer');
 element.innerHTML= time;

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
