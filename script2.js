var colors=['black','blue','green','yellow','red','violet','orange','brown','white','pink'];
var par=document.getElementById('par');
var btn=document.getElementById('btn');
var speed=500;

//not working change speed generate circle functions!!!!

// function slowSpeed(){
//     speed=50;
// }
// function normalSpeed(){
//     speed=500;
// }
// function fastSpeed(){ 
//     speed=1000  ;
// }   


var timer=setInterval(generator,speed)

function generator(){
    
    btn.addEventListener("click",function(){
        clearInterval(timer);
    })
    
    var y = Math.floor((Math.random() * 450) + 40).toString();
    var x = Math.floor((Math.random() * 1500) + 1).toString();
    var radius= Math.floor((Math.random() * 200) + 1).toString();
    var colorNumber=Math.floor((Math.random()*10)+0)
    createCircle(x,y,radius,colorNumber)    
}

var borderRadius="50%";
var squere=document.getElementById('squere');
squere.addEventListener('click',function(){
    borderRadius='0'
})

function createCircle(x,y,radius,colorNumber){
    var circle=document.createElement('div');
    
    circle.style.borderRadius=borderRadius;
    circle.classList.add('myCircle')
    par.appendChild(circle)
    circle.style.position='absolute';
    circle.style.left=x+'px';
    circle.style.top=y+'px';    
    circle.style.width=radius+'px';
    circle.style.height=radius+'px';
    circle.style.border='2px solid black';
    circle.style.borderColor=colors[colorNumber];
    console.log(speed);
}

// i want click the circle and remove these. but not working that !!!

// document.getElementsByClassName('myCircle').addEventListener("click",function(){
//     alert('fjiwe')
    // par.removeChild(myCircle[this])

// })
//#############################################################################################
//clear all circles button
document.getElementById('clearCircles').addEventListener('click',function(){
    
    var myCircles=document.getElementsByClassName('myCircle');
    for(var i=0;i<myCircles.length;i++){
        if(myCircles[i].style.borderRadius=='50%'){
            myCircles[i].style.borderRadius='0'
        }else{
            myCircles[i].style.borderRadius='50%'
        }
    }

})


