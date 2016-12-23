var canvas;
var ground;
var body;
var celestialobj;

function setup(){
  body = document.querySelector('body');
  celestialobj = new SpaceObjects(10,0);
  
  
  canvas = createCanvas(body.clientWidth,body.clientHeight);
  canvas.class("backgroundcn");
  
  //canvas.style("width","100%");
  //canvas.style("height","100%");
  celestialobj.createSpaceBody(1);
  celestialobj.item(0).id="sun";
  celestialobj.item(1).id="moon";
  celestialobj.item(0).setangle(celestialobj.sunang+5);
  celestialobj.item(1).setangle(celestialobj.moonang);
  celestialobj.item(0).setsmcolor('yellow');
  celestialobj.item(1).setsmcolor('lightblue');
  
  
  var a = [];
  var test;
  var test2;
  var arr;
  for(var i=0; i < 5; i++){
    
    //console.log("here");
    
//    test = new ArrayList({"item":i});
//    for(j=0;j<=2;j++)
//      test2 = new ArrayList({"item":j});
    //a.push("here")
  }
 
  //console.log(test2);
  
  //console.log(test);
  
}

function draw(){
 
   var o = document.querySelector('#defaultCanvas0');
 o.style.width = "100%";
 o.style.height = "100%";
  background('blue');
   //ground;
  celestialanimate();
//  push();
//  fill(celestialobj.item(0).smcolor);
//  translate(0,0);
//  text("sun"+celestialobj.item(0).ang+"", 10, 30);
//  pop();
  
//  push();
//  fill(celestialobj.item(1).smcolor);
//  translate(0,10);
//  text("moon"+celestialobj.item(1).ang+"", 10, 30);
//  pop();
//  
  //celestialobj.update();


  translate(0,window.innerHeight/1.9);
  fill(255);
  ground = rect(0,0,1000000,1000000);
  
}

window.onresize = function(){
  canvas.size(window.innerWidth,window.innerHeight);
}

function celestialanimate(){
  push();
  translate(width/2,height/2+100);
  celestialobj.display();
  celestialobj.orbit();
  pop();
}

function sun(){
  
}


