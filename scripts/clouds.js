function Clouds(x,y,o){
  this.x=x||random(width);
  this.y = y;
  this.rx = random(width);
  this.ry = random(height);
  
  
  if(this.ry <= (height/2)){
    this.y=random(this.ry);
    if(this.ry <= (height/2)){
      console.log("hasda");
      ///scale(this.x/30,this.ry/30);
    }
  }
  
  this.o = o;
  
  this.clouds = new Array();
  
  this.update = function(){
    
    this.x+= 1;
    //this.y = this.y;

  }
  this.createClouds = function(newx,newy,offset){
    for(var i=0 ; i < 15; i++){
      this.x = newx||random(width);
      //this.y = newy||random(height);
      this.o = o;
      this.clouds.push(new Clouds(this.x,this.y,this.o));
    }
  }
  
  this.drawclouds =function(){
    for(var i=0 ; i < 10; i++){
      
      if(this.clouds[i] !== undefined){
        this.clouds[i].update();
        this.clouds[i].draw();
      }
      if(this.clouds[i].x == 0)
        console.log(this.clouds[i].x);
    }
  }
  this.draw= function(){
    push();
    beginShape();

    fill(255);

    
    translate(this.x,this.y);
    if(this.rx >200)
    scale(this.rx/300,this.ry/300);
    if(this.x >= width){
      this.x=0;
      this.ry = random(height);
      scale(random(width)/300,random(height)/300);
      if(this.ry < (height/2))
        this.y = random(this.ry);
    }
    
    noStroke();
    for (var x = 0; x < 100; x+=10) {
      for (var y = 0; y < 20; y+=10) {
        var c = 255 * noise(0.001 * x, 0.001 * y);
        fill(c);
        arc(x, y, 80, 80, 236, 3.412333, CHORD);
        //console.log((PI++)*.001);
      }		
    }
    
    endShape();
    pop();
    
    
  }
}