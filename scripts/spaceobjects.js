var SpaceObjects = function(r,d,o){
  this.radis = r;
  this.distence = d;
  this.ang = 0;
  this.object = [];
  this.object2 = [];
  this.id = "";
  this.sunang = 90;
  this.moonang = 180;
  this.objectdistance=window.innerWidth/4;//2.4;
  this.orbitspeed=o;
  this.smcolor = 0;
  this.smspeed=0.03//0.00003;
  this.ellipsed ;
  this.setangle =function(set){
    this.ang = set;
  }
  this.createSpaceBody = function(size,r){
    this.object = new Array(size);
    this.orbitspeed = this.smspeed;
    console.log("objects length"+ this.object.length);
    for(var i=0; i <=this.object.length; i++){
      
      this.object2.push(new SpaceObjects(90,this.objectdistance,this.orbitspeed));
      //this.object[i] = this.object2[i];
      if(i == this.object.length){
        
        break;
      }  
    }
    this.object = this.object2;
    
  }
  this.orbit = function(){
    this.ang = this.ang + this.orbitspeed;
    for(var i of this.object){
      i.orbit();
    }
    if(this.ang = 360){
      this.ang = 0;
    }
  }
  
  this.setsmcolor = function(val){
    this.smcolor = val;
  }
  this.move = function(val,tune){
    this.smspeed = (val)*tune;
  }
  this.movebytime = function(){
    
  }
  this.item = function(get){
    return this.object[get];
  }
  this.setID = function(id){
    this.id =id;
  }
  this.getID = function(){
    return this.id;
  }
  
  this.display = function(){
 
    push();
//    
    fill(this.smcolor);
    rotate(this.ang); 
    translate(this.distence, 0);
    this.ellipsed = ellipse(0, 0, this.radis*2, this.radis*2);
    
    //this.update(); 
    //console.log(this.ellipsed);
//    console.log(this.ellipsed.translate(this.distence, 0));
      
//    
    //rect(this.ang,0,200,200);
   
    for(var i of this.object){
      
      smooth();
      i.display();
      text(""+this.id+"");
    
      
    }
    //resetMatrix();
    pop();
   
  }
  this.count=0;
  this.update = function(){
    
    //rotate(this.ang);
    //translate(this.distence, 0);
    push();
    console.log(this.ang);
    this.ellipsed.translate(3, 0);
    this.ellipsed.rotate(344);
    console.log(this.ellipsed);
    for(var i of this.object){
      console.log(i.ellipsed);
      smooth();
      //i.ellipsed.rotate(this.ang);
      
      
    }
    this.count++;
    pop();
  }
 
}




var g = {count:0,"array":new Array()};

var ArrarCounter = function(){
  this.count = 0;
  this.isrunning = false;
  
  this.array = new Array();
}
 var a = new ArrarCounter();


function ArrayList(d={"size ":Infinity, "item":"", "[]":[],"looped":false}){
 
  this.counter = new ArrarCounter();
  this.list = this.counter.array;
  this.outerarry = new Array();
  this.count = 0;
  a.count = 0;
  this.item;
  this.sizecounter = {"counter":0};
  
  this.counter.array.push(d.item);
  //this.list.push(d.item);
  //this.list2 = this.list;
//  if(d !== undefined || d.item !== ""){
//    
//    this.list.push(d.item);
//    for(var i of this.list){
//      
//      //this.list[g.count] = d.item;
//      
//      a.count++;
//      break;
//    }
//    this.outerarry.push(d.item);
//    console.log("new length"+ this.list.length);
//    console.log("new length"+ this.outerarry.length);
//    for(var i=0; i <= this.list.length; i++){
//      
//    }
//    
//    if(d["[]"]!== undefined){   
//      for(var j of d["[]"]){
//        this.list.push(j);
//        //this.count++;
//      }
//    }
//    g.count++;
//    
//    
//    if(this.count < this.count+1){
//      this.count++;
//    }
//    //this.count = a.count;
//    this.counter.counter++;  
//  }
//  
//  this.counter = function(item){
//    this.item = item;
//    this.sizecounter.counter++;
//    return this.item; 
//  }
//  //console.log(this.counter(d.item));
//  console.log(a.count + "soo");
  return this.outerarry;
}
