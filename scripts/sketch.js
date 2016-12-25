/*
  Written by: Kishon Diaz
  Using P5.js
  This is a ineractive 404 page 
*/


var canvas;
var ground;
var body;
var celestialobj;
var screensize =900;
var scsize =0;
var suntime;//=0.100;
var suntimet;//=;
var moontime;//=0.100;
var moontimet;//=;
var whattime = [
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[1.530,1.730,1.930,2.130,2.530,2.930,3.130,3.330,3.530,4.130,4.330,4.530,4.730,5.130,5.330,5.530,5.730,5.930,6.130,6.330,6.530,6.730,6.930,1.130]]
/*
  P5 Setup function
*/
function setup(){
  suntime=1;
  suntimet =0;
  moontime=1;
  moontimet =0;
  body = document.querySelector('body');
  /*Creates the sun and moons center and the sun and moon
    Based on Daniel Shiffman P5 lesson on Solor System in Processing
    
  */
  celestialobj = new SpaceObjects(10,0);
  
  /*Creates Canavs used as background*/
  canvas = createCanvas(body.clientWidth,body.clientHeight);
  canvas.class("bacsuntimegroundcn");
  
  celestialobj.createSpaceBody(1);
  celestialobj.item(0).id="moon";
  celestialobj.item(1).id="sun";
  celestialobj.item(0).setangle(1);
  celestialobj.item(1).setangle(1);
  celestialobj.item(0).setsmcolor('lightblue');
  celestialobj.item(1).setsmcolor('yellow');
}
/*
  P5 Render function
*/
function draw(){
 
  var o = document.querySelector('#defaultCanvas0');
  o.style.width = "100%";
  o.style.height = "100%";
  
  /*P5 background function*/
  background('blue');
  /*Method used to check for screen height*/
  screenresizing();
  /*The animation method use to move the sun and moon*/
  celestialanimate();
  
  push();
  fill(celestialobj.item(1).smcolor);
  translate(0,0);
  text("sun"+celestialobj.item(1).ang+"", 10, 30);
  pop();
  
  push();
  fill(celestialobj.item(0).smcolor);
  translate(0,10);
  text("moon"+celestialobj.item(0).ang+"", 10, 30);
  pop();

  /*The Ground willl create its own object soon*/
  push();
  translate(0,window.innerHeight/2);
  fill("burlywood");
  rect(0,window.innerHeight-body.clientHeight,1000000,1000000);
  pop();
  
}
/*Checks if the screen is resized and resizes the canvas*/
window.onresize = function(e){
  canvas.size(window.innerWidth,window.innerHeight);
  location.reload();
}
/*Funtion that does the sun and moon animation 80 percent of the work 
  is done here */
function celestialanimate(){
  push();
  /*Sets the location of the center of the sun and moon location*/
  translate(width/2,(height/2+body.clientHeight)-(screensize-scsize));
  /*Renders the sun and moon and center point*/
  celestialobj.display();
  /*The running counter for the angle of the sun and moon*/
  celestialobj.orbit();
  /*This var is for the moon its for inversing the hour into is oppsite hour
    for the moon
  */
  var newn=0;
  /*
    Runs the animations based on certain ang postions 
  */
  for(var i=0; i<= hour();i++){
    /*Checks to see if I is with the hour in the muilti array*/
    if(i == whattime[0][i]){

      for(var j=0; j <= hour(); j++){
        suntime = checkmin(whattime[1][j]);
        if(suntime >= checkmin(whattime[1][j+1]) && 
           checkmin(whattime[1][j+1]) !== undefined){
          suntimet += .010;
        }
        newn = j;
        if(newn === 0){
          newn = 0;
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn === 12){
          newn = 12;
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn < 12){
          newn = j + 12;
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn > 12){
          newn = j - 12;
          moontime = checkmin(whattime[1][newn]);
        }
      }
    }
  }
  for(var i=0; i <= suntime; i+=suntime){
    if(i >0){
      if(suntime <= i){
        suntime = suntime + suntimet;
      }
    }
  }
  for(var i=0; i <= moontime; i+=moontime){
    if(i >0){
      if(moontime <= i){
        moontime = moontime + moontimet;
      }
    }
  }
  if(second() <= 59){
    suntimet += .000000000001;
    moontimet += .000000000001;
  }
  
  celestialobj.item(0).setangle(moontime);
  celestialobj.item(1).setangle(suntime);

  pop();

}

function sun(){
  
}
function checkmin(out){

  for(var k=0 ;k < minute(); k++){
    out+=.001;
    if(out == .005){
      out = .005;
    }else if(out == .010){
      out = .010
    }else if(out == .015){
      out = .015
    }else if(out == .020){
      out = .020
    }else if(out == .025){
      out = .025
    }else if(out == .030){
      out = .030
    }else if(out == .035){
      out = .035
    }else if(out == .040){
      out = .040
    }else if(out == .045){
      out = .045
    }else if(out == .050){
      out = .050
    }else if(out == .055){
      out = .055
    }else if(out == .059){
      out = .059
    }
  }
  return out;
}

function screenresizing(){
   var w = window.matchMedia("(min-width: 3500px)");
  var m = window.matchMedia("(min-width: 1080px)");
  if(w.matches){
    console.log("her");
  }else{
    
    if(height <= 360){
      scsize = 650;
    }else
    if(height <= 412){
      scsize = 650;
    }else
    if(height <= 414){
      scsize = 650;
    }else
    if(height <= 546){
      scsize = 490;
    }else
    if(height <= 568){
      scsize = 345;
    }else
    if(height <= 600){
      scsize = 345;
    }else
    if(height <= 640){
      scsize = 320;
    }else
    if(height <= 732){
      scsize =270;
    }else
    if(height <= 736){
      scsize =230;
    }else
    if(height <= 768){
      scsize =230;
    }else
    if(height <= 900){
      scsize =230;
    }else
    if(height <= 999){
      scsize =200;
    }else
    if(height <= 1024){
      scsize =0;
    }else
    if(height <= 1080){
      scsize =300;
      console.log("this spot");
    }else
    if(height <= 1366){
      scsize =-160;
    }else
    if(height <= 2900){
      scsize =-1800;
    }else
    if(height <= 3490){
      scsize =-4900;
      console.log("err");
    }
   
  }
}

