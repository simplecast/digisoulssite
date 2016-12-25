/*
  Written by: Kishon Diaz
  Using P5.js
  This is the Object for the sun moon and its center
  Based on Daniel Shiffman P5 lesson on Solor System in Processing
  There are simularities ,but I am not building a solor system only a
  obscure 2d sun and moon
  75% of this script is based on his java algorithm I made it work in my own way 
*/

var SpaceObjects = function(r,d,o){
  this.radis = r;
  this.distence = d;
  this.ang = 0;
  this.object = [];
  this.object2 = [];
  this.id = "";
  this.sunang = 90;
  this.moonang = 180;
  this.objectdistance=window.innerWidth/2.4;
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
      /*Arraylist Does not exist in javascript had to push then break 
        and set a new that i pushed to to the first one to set the sun and moon*/
      this.object2.push(new SpaceObjects(90,this.objectdistance,this.orbitspeed));
      if(i == this.object.length){break;}  
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
    fill(this.smcolor);
    rotate(this.ang); 
    translate(this.distence, 0);
    this.ellipsed = ellipse(0, 0, this.radis*2, this.radis*2);
    for(var i of this.object){
      
      smooth();
      i.display();    
    }
    pop();
  }
}
