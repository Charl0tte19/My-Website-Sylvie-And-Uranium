var s = skrollr.init();
var record,record2,record3=0;
function type(target,second,delay){
  setTimeout(function(){$(target).css("animation","typing "+second+" linear");
$(target).css("opacity","1");},delay);    
}

$(".screen").mouseenter(
  function(){
    $(".dialog").css("opacity","1");
    type(".d1","1s","1000");
  }
);

var click_cnt = 0;

$(".screen").click(
  function(){
    console.log(click_cnt);
    click_cnt++;
    $(".d1").css("display","none"); 
    if(click_cnt==1&&$(".d1").css("opacity")=="1"){
  $(".sylvie").css("opacity","1");
  type(".d2","1.5s","500");}
    else if(click_cnt==2&&$(".sylvie").css("opacity")=="1"){
      $(".d2").css("display","none");
      $(".sylvie").css("background-image","url('pictures/5554.png')");
      type(".d3","2s","1000");
    }
   else if(click_cnt==3&&$(".d2").css("display")=="none"){
     $(".opt1").css("display","block");
   }else if(click_cnt==4&&$(".opt1").css("display")=="none"){
     
   }else if(click_cnt==5){
     $(".opt2").css("display","block");}else if(click_cnt==6&&$(".opt2").css("display")=="none"){}
else if(click_cnt==7&&record3==1){
    $(".d7_1").css("display","none");
    $(".d7_2").css("display","none");
    $(".sylvie").css("background-image","url('pictures/5554.png')");
    type(".d8_1","2s","1000");
}
  else if(click_cnt==8&&$(".d7_1").css("display")=="none"){
    $(".d8_1").css("display","none");
    type(".d9","2s","500");
  }
  else if(click_cnt==9&&$(".d8_1").css("display")=="none"){
    $(".opt3").css("display","block");
  }
else{
  click_cnt--;
}
  }
);

$(".op1").click(
  function(){
    record = ".d4_1";
    record2= ".d4_2";
    $(".opt1").css("display","none");
    $(".d3").css("display","none");
    $(".sylvie").css("background-image","url('pictures/5553.png')");
  type(".d4_1","0.5s","500");
  type(".d4_2","2s","1000");
  }
)

$(".op2").click(
  function(){
     record = ".d5_1";
    record2= ".d5_2";
    $(".opt1").css("display","none");
    $(".d3").css("display","none");
    $(".sylvie").css("background-image","url('pictures/5553.png')");
  type(".d5_1","0.5s","500");
  type(".d5_2","3s","1000");
  }
)

$(".op3").click(
  function(){
    record = ".d6_1";
    record2= ".d6_2";
    $(".opt1").css("display","none");
    $(".d3").css("display","none");
    $(".sylvie").css("background-image","url('pictures/5553.png')");
  type(".d6_1","0.5s","500");
  type(".d6_2","3s","1000");
  }
)

$(".op4").click(
  function(){
    record3=1;
    $(".opt2").css("display","none");
    $(record).css("display","none");
    $(record2).css("display","none");
    $(".sylvie").css("background-image","url('pictures/5555.png')");
  type(".d7_1","0.5s","500");
  type(".d7_2","3s","1000");
  }
)



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particlesOnScreen = 245;
var particlesArray = [];
var w,h;
w = canvas.width = window.innerWidth;
h = canvas.height = 1000;

function random(min, max) {
    return min + Math.random() * (max - min + 1);
};

function clientResize(ev){
    w = canvas.width = window.innerWidth;
    h = canvas.height = 1000;
};
window.addEventListener("resize", clientResize);

function createSnowFlakes() {
    for(var i = 0; i < particlesOnScreen; i++){
        particlesArray.push({
            x: Math.random() * w,  
            y: Math.random() * h,  
            opacity: Math.random(),  
            speedX: random(-11, 11),  
            speedY: random(7, 15),    
            radius:random(0.5, 4.2),
        })
    }
};

function drawSnowFlakes(){
    for(var i = 0; i < particlesArray.length; i++){    
        var gradient = ctx.createRadialGradient(  
            particlesArray[i].x,   
            particlesArray[i].y,   
            0,                     
            particlesArray[i].x,   
            particlesArray[i].y,   
            particlesArray[i].radius  
            );

            gradient.addColorStop(0, "rgba(255, 255, 255," + particlesArray[i].opacity + ")");  // white
            gradient.addColorStop(.8, "rgba(210, 236, 242," + particlesArray[i].opacity + ")");  // bluish

 

            gradient.addColorStop(1, "rgba(237, 247, 249," + particlesArray[i].opacity + ")");   // lighter bluish
          
            ctx.beginPath(); 
            ctx.arc(
            particlesArray[i].x,  
            particlesArray[i].y,  
            particlesArray[i].radius,  
            0,                         
            Math.PI*2,                 
            false                     
            );

        ctx.fillStyle = gradient;   
        ctx.fill();                 
    }
};

function moveSnowFlakes(){
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].x += particlesArray[i].speedX;     
        particlesArray[i].y += particlesArray[i].speedY;     

        if (particlesArray[i].y > h) {                                                                               
            particlesArray[i].x = Math.random() * w * 1.5;
            particlesArray[i].y = -50;
        }
    }
};

function updateSnowFall  () {
    ctx.clearRect(0, 0, w, h);
    drawSnowFlakes();
    moveSnowFlakes();
};

setInterval(updateSnowFall,50);
createSnowFlakes();