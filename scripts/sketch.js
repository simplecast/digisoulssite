var canvas;
var ground;
var body;
var celestialobj;
var screensize =900;
var scsize =0;
var lasthour;
var suntime;//=0.100;
var suntimet;//=;
var moontime;//=0.100;
var moontimet;//=;
var newmin=0;
var whattime = [
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],[1.530,1.730,1.930,2.130,2.530,2.930,3.130,3.330,3.530,4.130,4.330,4.530,4.730,5.130,5.330,5.530,5.730,5.930,6.130,6.330,6.530,6.730,6.930,1.130],
  [23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0],
  [1.130,6.930,6.730,6.530,6.330,6.130,5.930,5.730,5.530,5.330,5.130,4.730,4.530,4.330,4.130,3.530,3.330,3.130,2.930,2.530,2.130,1.930,1.730,1.530]]

function setup(){
  suntime=1;
  suntimet =0;
  moontime=1;
  moontimet =0;
  body = document.querySelector('body');
  lasthour = hour();
  celestialobj = new SpaceObjects(10,0);
  
  
  canvas = createCanvas(body.clientWidth,body.clientHeight);
  canvas.class("bacsuntimegroundcn");
  
  //canvas.style("width","100%");
  //canvas.style("height","100%");
  celestialobj.createSpaceBody(1);
  celestialobj.item(0).id="moon";
  celestialobj.item(1).id="sun";
  //celestialobj.item(0).setangle(celestialobj.sunang+5);
  //celestialobj.item(1).setangle(celestialobj.moonang);
  celestialobj.item(0).setangle(1);
  celestialobj.item(1).setangle(1);
  celestialobj.item(0).setsmcolor('lightblue');
  celestialobj.item(1).setsmcolor('yellow');
  
  
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
  
  //celestialobj.update();


  push();
  translate(0,window.innerHeight/2);
  fill("burlywood");
  rect(0,window.innerHeight-body.clientHeight,1000000,1000000);
  pop();
  
  //console.log(celestialobj.smspeed);
  //celestialobj.movebytime();
}
var r = {onsize:0};
window.onresize = function(e){
  canvas.size(window.innerWidth,window.innerHeight);
  //console.log(e)
  //r.onsize++;
}

function celestialanimate(){
  //suntime = 0.000;
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
    }
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
  
  if(m.match){
    console.log("h");
  }
  push();
  translate(width/2,(height/2+body.clientHeight)-(screensize-scsize));
  celestialobj.display();
  celestialobj.orbit();
 // console.log(millis());
  //suntime =  5.330;
    //suntime =  6.130;
  
  if(hour() == 0){
    //suntime =  1.530;
    //morning
  }else
  if(hour() == 1){
    //suntime =  1.730;
  }else
  if(hour() == 2){
    //suntime =  1.930;
  }else
  if(hour() == 3){
    //suntime =  2.130;
  }else
  if(hour() == 4){
    //suntime =  2.530;
  }else
  if(hour() == 5){
    //suntime =  2.930;
  }else
  if(hour() == 6){
    //suntime =  3.130;
    //day
  }else
  if(hour() == 7){
    //suntime =  3.330;
  }else
  if(hour() == 8){
    //suntime =  3.530;
  }else
  if(hour() == 9){
    //suntime = 4.130;
  }else
  if(hour() == 10){
    //suntime =  4.330;
    
  }else
  if(hour()== 11){
    //suntime =  4.530;
  }else
  if(hour()==12){
    //suntime =  4.730;
//    if(hour()==12 && minute() <= 49){
//      suntime = suntime + suntimet;
//      suntimet += .0000001;
//    }
  }
  else
  if(hour() ==13){
    //suntime =  5.130;;
  }else
  if(hour() ==14){
    //suntime = checkmin(5.330);
  }else
  if(hour() ==15){
    //suntime =  5.530;
  }else
  if(hour() ==16){
    //suntime =  5.730;
  }else
  if(hour() ==17){
    //suntime =  5.930;
  }else
  if(hour() ==18){
    //suntime =  6.130;
    //end of day;
  }else
  if(hour() ==19){
    //suntime =  6.330;
    //night;
 
  }else
  if(hour() ==20){
    //suntime =  6.530;

  }else
  if(hour() ==21){
    //suntime =  6.730;

  }else
  if(hour() ==22){
    //suntime =  6.930;

  }else
  if(hour() ==23){
    //suntime =  1.130;
    //end of night

  }
  var newn=0;
  for(var i=0; i<= hour();i++){
    //console.log(whattime[0][i]);
    if(i == whattime[0][i]){
      //console.log("hsei");
      for(var j=0; j <= hour(); j++){
        suntime = checkmin(whattime[1][j]);
        //console.log(suntime);
        if(suntime >= checkmin(whattime[1][j+1]) && 
           checkmin(whattime[1][j+1]) !== undefined){
          suntimet += .010;
        }
        newn = j;
        if(newn === 0){
          newn = 0;
          //console.log(newn);
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn === 12){
          newn = 12;
          //console.log(newn);
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn < 12){
          newn = j + 12;
          //console.log(newn);
          moontime = checkmin(whattime[1][newn]);
        }
        if(newn > 12){
          newn = j - 12;
          //console.log(newn);
          moontime = checkmin(whattime[1][newn]);
        }
      }
    }
  }
//  for(var i=0; i<= hour();i++){
//    console.log(whattime[2][i]);
//    if(i == whattime[2][i]){
//      //console.log("hsei");
//      for(var j=0; j <= hour(); j++){
//        moontime = checkmin(whattime[3][j]);
//        //console.log(suntime);
//        if(moontime >= checkmin(whattime[3][j+1]) && 
//           checkmin(whattime[3][j+1]) !== undefined){
//          moontime += .010;
//        }
//        
//      }
//    }
//  }
  //console.log()
//  for(var i=0; i <= hour();i++){
//    //console.log(whattime[0][i]);
//    if(i == whattime[0][i]){
//      console.log("hsei");
//      for(var j=0; j <=hour(); j++){
//        moontime = checkmin(whattime[1][j]);
//        console.log("monn" + moontime);
//      }
//    }
//  }
  
  if(hour()<= lasthour){
    
    //suntime = suntime +.001;
    if(minute()<=59){
      //suntime = suntime +.01;
    }
    
    //console.log("here" + suntime);
  }
  for(var i=0; i <= suntime; i+=suntime){
    
    if(i >0){
      
      if(suntime <= i){
        //console.log(i);
        suntime = suntime + suntimet;
      }
    }
  }
  for(var i=0; i <= moontime; i+=moontime){
    
    if(i >0){
      
      if(moontime <= i){
        //console.log(i);
        moontime = moontime + moontimet;
      }
    }
  }
  if(suntime <= 4.530){
    //suntime = suntime + suntimet;
  }else
  if(suntime <= 5.330){
    suntime = suntime + suntimet;
  }
  if(moontime <= 1.930){
    moontime = moontime + moontimet;
  }
  if(second() <= 59){
    suntimet += .000000000001;
    moontimet += .000000000001;
  }
  
  celestialobj.item(0).setangle(moontime);
  celestialobj.item(1).setangle(suntime);
  //celestialobj.orbit();
  pop();
  //console.log(r.onsize);
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
  /*if(minute() <= 5){
    
  }else
  if(minute() <= 10){
    out+=.001;
    if(out == .010){
      out = .010;
    }
  }if(minute() <= 15){
    out+=.001;
    if(out == .015){
      out = .015;
    }
  }if(minute() <= 20){
    out+=.001;
    if(out == .020){
      out = .020;
    }
  }if(minute() <= 25){
    out+=.001;
    if(out == .025){
      out = .025;
    }
  }if(minute() <= 30){
    out+=.001;
    if(out == .030){
      out = .030;
    }
  }if(minute() <= 35){
    out+=.001;
    if(out == .035){
      out = .035;
    }
  }if(minute() <= 40){
    out+=.001;
    if(out == .040){
      out = .040;
    }
  }if(minute() <= 45){
    out+=.001;
    if(out == .045){
      out = .045;
    }
  }if(minute() <= 50){
    out+=.001;
    if(out == .050){
      out = .050;
    }
  }if(minute() <= 55){
    out+=.001;
    if(out == .055){
      out = .055;
    }
  }if(minute() <= 59){
    out+=.001;
    console.log(out);
    if(out == .059){
      out = .059;
    }
  }
  */
  return out;
}

