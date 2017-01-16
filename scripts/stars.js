function Star(){
  this.r = random(height);
  /*if( this.r < (height/2))
  { //console.log(this.r);
    //this.star = new Particals(random(width),this.r);
  }*/
  this.star = new Particals(random(width),this.r);
  this.stars = new Array();
  
  this.updated = function(){
    if(this.star != undefined){
      this.star.update();
      //this.stars.push(new Star());
    }
    
  }
  this.createstars = function(){
    
    for(var i=0 ;i<= 400; i++){
      
        this.stars.push(new Star());
        //console.log(i);
      
    }
  }
  this.draw = function(){
    
    if(this.star != undefined){
      this.star.draw();
      
    }
    for(var i=0 ;i <= 400; i++){
      if(this.stars[i] !== undefined)
        //this.stars[i].update();
        this.stars[i].draw();
      }
    
  }
}